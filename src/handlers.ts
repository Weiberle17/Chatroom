import { Request, Response } from 'express'
import mariadb from 'mariadb'
require('dotenv').config()

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  connectionLimit: 5,
})

export const rootHandler = (_req: Request, res: Response) => {
  return res.send('<h1>API is working</h1>')
}

export const selectAllUsers = async (_req: Request, res: Response) => {
  let conn, result
  try {
    conn = await pool.getConnection()
    result = await conn.query('select * from users')
    console.log(result)
  } finally {
    if (conn) conn.end()
  }
  return res.send(result)
}

export const selectOneUser = async (req: Request, res: Response) => {
  let conn, result
  const { params } = req
  const { id } = params
  try {
    conn = await pool.getConnection()
    result = await conn.query('select * from users where UserID=?', [id])
    console.log(result)
  } finally {
    if (conn) conn.end()
  }
  return res.send(result)
}
