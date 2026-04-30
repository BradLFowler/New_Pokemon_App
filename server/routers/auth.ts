import express from 'express'
import { signup, login } from '../controllers/auth.ts'
const authRouter = express.Router()

authRouter.post('/signup', signup)

authRouter.post('/login', login)

export default authRouter