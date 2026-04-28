import express from 'express'
import { checkJwt } from '../middleware/middleware'
import usersController from '../controllers/users'

const router = express.Router()


router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.post('/', checkJwt ,usersController.createUser)

router.put('/:id', checkJwt ,usersController.updateUserById)

router.delete('/:first_name', checkJwt ,usersController.deleteUserByFirstName)

export default router