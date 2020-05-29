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

  try {
    const user = await User.findOne({ email })

    if (!user) {
      consola.error('Invalid email, account not found ')
      return res
        .status(401)
        .json({ message: 'Invalid email / password combination (email)' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      consola.error('Invalid password')
      return res
        .status(401)
        .json({ message: 'Invalid email / password combination (password)' })
    }

    const accessToken = createAccessToken(
      user._id,
      user.name,
      user.email,
      user.role
    )

    // implicit else
    res.json({
      token: accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (e) {
    res.status(401).json({ message: 'Invalid email / password combination' })
    consola.log(e.message)
  }
})

// @route   POST api/auth/register
// @desc    Creates a new user
// @access  Public

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body.registrationInfo

  if (!req.body) {
    consola.error('please enter all fields')
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const user = await User.findOne({ email })

    if (user) {
      consola.error('Email already exist')
      return res.status(401).json({
        message: 'There was a problem (email already exist)'
      })
    }

    const salt = await bcrypt.genSalt(10)
    if (!salt) {
      consola.error('There was an error with bcrypt')
      return res
        .status(401)
        .json({ message: 'There was a problem with the registration (bcrypt)' })
    }

    const hash = await bcrypt.hash(password, salt)
    if (!hash) {
      consola.error('There was an error with the password hashing')
      return res.status(401).json({
        message: 'There was a problem with the registration (hash)'
      })
    }

    const newUser = new User({
      name,
      email,
      password: hash
    })

    const savedUser = await newUser.save()

    if (!savedUser) {
      consola.error('There was an error creating the user')
      return res.status(401).json({
        message: 'A new account could not be created try again later'
      })
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
      token: accessToken,
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role
      }
    })
  } catch (e) {
    consola.error(e.message)
    res
      .status(401)
      .json({ message: 'There was a server problem during the registration' })
  }
})

// @route   GET api/auth/user
// @desc    Required by Auth.loginWith
// @access  Private

app.get('/user', (req, res) => {
  const authToken = req.headers.authorization
  if (!authToken) {
    consola.error(' invalid token ')
    return res.status(401).json({
      message: 'Invalid authorization '
    })
  }

  const accessToken = authToken.split(' ')

  try {
    const decoded = jwt.verify(accessToken[1], JWT_SECRET)

    req.user = decoded

    res.status(200).json({ user: req.user })
  } catch (e) {
    res.status(401).json({
      message: 'Invalid authorization account not found'
    })
    consola.log(e.message)
  }
})

// @route   POST api/auth/logout
// @desc    Logs the user out Required by Auth
// @access  Public

app.post('/logout', (_req, res) => {
  res.status(200).json({ message: 'OK' })
})

export default app
