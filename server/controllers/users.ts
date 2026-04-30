import mysql from 'mysql2'
import pool from '../sql/connection.ts'
import { handleSQLError } from '../sql/error.ts'


// Must figure out correct typing!!!!!!!!!!!!!!!!!!!!

export const getAllUsers = (req: any, res: any) => {
  pool.query("SELECT * FROM users", (err: any, rows: any) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

export const getUserById = (req: any, res: any) => {
  let sql = "SELECT * FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err: any, rows: any) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

export const createUser = (req: any, res: any) => {
  const { firstName, lastName } = req.body
  let sql = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
  sql = mysql.format(sql, [ firstName, lastName ])

  pool.query(sql, (err: any, results: any) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

export const updateUserById = (req: any, res: any) => {
  const { firstName, lastName } = req.body
  let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

  pool.query(sql, (err: any, results: any) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

export const deleteUserByFirstName = (req: any, res: any) => {
  let sql = "DELETE FROM users WHERE first_name = ?"
  sql = mysql.format(sql, [ req.params.first_name ])

  pool.query(sql, (err: any, results: any) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  })
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserByFirstName
}