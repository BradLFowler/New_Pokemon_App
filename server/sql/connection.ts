import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
const database = process.env.DATABASE


const pool = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database,
    connectionLimit: 100
})
 


export default pool
