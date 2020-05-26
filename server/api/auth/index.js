import { Router, json } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import consola from 'consola'

// User Model
import User from '../models/user'

const JWT_SECRET = process.env.VUE_APP_JWT_SECRET
consola.ready(JWT_SECRET)

const app = Router()
app.use(json())

function createAccessToken(id, name, email, role) {
  return jwt.sign(
    {
      id,
      name,
      email,
      role
    },
    JWT_SECRET,
    {
      expiresIn: 60
    }
  )
}

// @route   POST api/auth/login
// @desc    Verifies the user exist and password matches
// @access  Public

app.post('/login', async (req, res) => {
  const { email, password } = req.body.loginInfo

  consola.log('req.body = ', req.body)

  try {
    const user = await User.findOne({ email })

    if (!user) {
      consola.error('Invalid email, account not found ')
      throw new Error('Invalid email/password combination')
    }
    consola.log('user found ')

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      consola.error('Invalid password')
      throw new Error('Invalid email/password combination')
    }

    const accessToken = createAccessToken(
      user._id,
      user.name,
      user.email,
      user.role
    )

    consola.ready('user logged in ')

    // implicit else
    res.json({
      token: {
        accessToken,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      }
    })
  } catch (e) {
    res.status(400)
    consola.log(e.message)
  }
})

// @route   POST api/auth/register
// @desc    Creates a new user
// @access  Public

app.post('/register', async (req, res) => {
  consola.log(req.body)
  const { name, email, password } = req.body.registrationInfo

  if (!req.body) {
    consola.error('please enter all fields')
    return res.status(400).json({ message: 'Please enter all fields' })
  }

  try {
    const user = await User.findOne({ email })

    if (user) {
      consola.error('Email already exist')
      throw new Error(' There was a problem with the registration')
    }

    const salt = await bcrypt.genSalt(10)
    if (!salt) {
      consola.error('There was an error with bcrypt')
      throw new Error(' There was a problem with the registration')
    }

    const hash = await bcrypt.hash(password, salt)
    if (!hash) {
      consola.error('There was an error with the password hashing')
      throw new Error(' There was a problem with the registration')
    }

    const newUser = new User({
      name,
      email,
      password: hash
    })

    const savedUser = await newUser.save()

    if (!savedUser) {
      consola.error('There was an error creating the user')
      throw new Error('There was a problem with the registration')
    } else {
      consola.ready(' Success ')
    }

    const accessToken = createAccessToken(
      savedUser._id,
      savedUser.name,
      savedUser.email,
      savedUser.role
    )

    res.status(200).json({
      // token: {
      token: { accessToken },
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email
      }
      // }
    })
  } catch (e) {
    consola.error(e.message)
    res
      .status(400)
      .json({ message: 'There was a problem with the registration' })
  }
})

// @route   GET api/auth/user
// @desc    Required by Auth.loginWith
// @access  Private

app.get('/user', (req, res) => {
  consola.log(' User .get  ')
  res.status(200).json({ user: '' })
})

// @route   POST api/auth/logout
// @desc    Logs the user out Required by Auth
// @access  Public

app.post('/logout', (_req, res) => {
  res.json({ status: 'OK' })
})

// @route   GET api/auth/users
// @desc    Gets all users
// @access  Public

app.get('/users', async (req, res) => {
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

export default app
