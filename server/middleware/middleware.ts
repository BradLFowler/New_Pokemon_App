import jwksRsa from 'jwks-rsa';
import { expressjwt as jwt} from 'express-jwt';

const domain = process.env.AUTH0_DOMAIN
const identity = process.env.AUTH0_AUDIENCE

if (!domain || !identity) {
  throw new Error('Missing AUTH0_DOMAIN or AUTH0_AUDIENCE env vars')
}

export const logger = (req: any, res: any, next: any) => {
  console.log(`Logging route: ${req.path}, Date: ${new Date().toISOString()}`)
  next()
}

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }),
  // Validate the audience and the issuer.
  audience: identity,
  issuer: `https://${domain}/`,
  algorithms: ['RS256']
});

export default {
  logger,
  checkJwt
}