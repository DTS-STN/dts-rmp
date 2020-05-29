import { Router, json } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import consola from 'consola'

// User Model
import User from '../models/user'

const JWT_SECRET = process.env.VUE_APP_JWT_SECRET
consola.ready('this is the jwt : ', JWT_SECRET)

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
  let errMessage = ''

  try {
    const { email, password } = req.body.loginInfo

    const user = await User.findOne({ email })

    if (!user) {
      consola.error('Invalid email, account not found ')
      errMessage = 'Invalid email / password combination (email) '
      throw new Error(errMessage)
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      consola.error('Invalid password')
      errMessage = 'Invalid email / password combination (wrong password) '
      throw new Error(errMessage)
    }

    const accessToken = createAccessToken(
      user._id,
      user.name,
      user.email,
      user.role
    )

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
    res.status(401).json({ message: errMessage })
    consola.log(e.message)
  }
})

// @route   POST api/auth/register
// @desc    Creates a new user
// @access  Public

app.post('/register', async (req, res) => {
  let errMessage = ''

  try {
    const { name, email, password } = req.body.registrationInfo

    if (!name || !email || !password) {
      consola.log(req.body.registrationInfo)
      errMessage = 'All fields are required - xxxxxx '
      throw new Error(errMessage)
    }

    const user = await User.findOne({ email })

    if (user) {
      consola.error('Email already exist')
      errMessage = 'There was a problem (email already exist)'
      throw new Error(errMessage)
    }

    const salt = await bcrypt.genSalt(10)
    if (!salt) {
      consola.error('There was an error with bcrypt')
      errMessage('There was a problem with the registration (bcrypt)')
      throw new Error(errMessage)
    }

    const hash = await bcrypt.hash(password, salt)
    if (!hash) {
      consola.error('There was an error with the password hashing')
      errMessage = 'There was a problem with the registration (hash)'
      throw new Error(errMessage)
    }

    const newUser = new User({
      name,
      email,
      password: hash
    })

    const savedUser = await newUser.save()

    if (!savedUser) {
      consola.error('There was an error creating the user')
      errMessage = 'A new account could not be created try again later'
      throw new Error(errMessage)
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
    res.status(401).json({ message: errMessage })
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
