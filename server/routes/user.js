import { Router } from 'express'
import consola from 'consola'

// User Model
import User from '../models/user'

const router = Router()

// @route   GET api/users
// @desc    Gets all users
// @access  Public

router.get('/users', async(req, res) => {
  try {
    const users = await User.find()

    if (!users) {
      consola.error('No users exist')
      throw new Error('No users exist')
    }
    // implicit else
    res.json(users)
  } catch (e) {
    res.status(400)
    consola.error(e.message)
  }
})

export default router
