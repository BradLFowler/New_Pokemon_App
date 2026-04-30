import express from 'express'
import { checkJwt } from '../middleware/middleware.ts'
import { createUser, getAllUsers, getUserById, updateUserById, deleteUserByFirstName } from '../controllers/users.ts'

const usersRouter = express.Router()


usersRouter.get('/', getAllUsers)

usersRouter.get('/:id', getUserById)

usersRouter.post('/', checkJwt , createUser)

usersRouter.put('/:id', checkJwt , updateUserById)

usersRouter.delete('/:first_name', checkJwt ,deleteUserByFirstName)

export default usersRouter