import express, { json } from 'express'
import authRouter from './routers/auth'
import usersRouter from './routers/users'
import { logger } from './middleware/middleware'
import cors from 'cors'
require('dotenv').config()

const app = express();
app.use(json())
const port = process.env.PORT;

const corsOptions = {
    origin: '*', 
    credentials: true,//access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', logger, (req, res) => {
    res.send('Welcome')
})

app.use('/auth', logger, authRouter)

app.use('/users', logger, usersRouter)

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})