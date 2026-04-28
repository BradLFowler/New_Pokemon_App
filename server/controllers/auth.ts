import axios from 'axios'
import argon2id from 'argon2'
import jwt from 'jsonwebtoken'
import mysql from 'mysql2'
import pool from '../sql/connection'
import handleSQLError from '../sql/error'

const domain = process.env.AUTH0_DOMAIN
const identity = process.env.AUTH0_IDENTITY
const clientId = process.env.AUTH0_CLIENT_ID
const clientSecret = process.env.AUTH0_CLIENT_SECRET


export const signup = (req: any, res: any) => {
  const { username, password } = req.body
  let sql = "INSERT INTO usersCredentials (username, password) VALUES (?, ?)"

  argon2id.hash(password).then((hash: any) => {
    sql = mysql.format(sql, [ username, hash ])
  
    pool.query(sql, (err: any, result: any) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
        return handleSQLError(result, err)
      }
      return res.send('Sign-up successful')
    })
  })
}

export const login = (req: any, res: any) => {
  const { username, password } = req.body

  axios(`https://${domain}/oauth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      grant_type: 'password',
      username: username,
      password: password,
      audience: identity,
      connection: 'Username-Password-Authentication',
      client_id: clientId,
      client_secret: clientSecret
    }
  })
  .then((response: any) => {
    const { access_token } = response.data
    res.json({
      access_token
    })
  })
  .catch((e: any) => {
    res.send(e)
  })

  let sql = "SELECT * FROM usersCredentials WHERE username = ?"
  sql = mysql.format(sql, [username])

  pool.query(sql, (err: any, rows: any) => {
    if (err) return handleSQLError(res, err)
    if (!rows.length) return res.status(404).send('No matching users')

    const hash = rows[0].password
    argon2id.verify(hash, password)
      .then((result: any) => {
        if (!result) return res.status(400).send('Invalid password')

        const data = { ...rows[0] }
        data.password = 'REDACTED'

        const token = jwt.sign(data, 'secret')
        return res.json({
          msg: 'Login successful',
          token
        })
      })
  })
}

export default {
  signup,
  login
}