import { Router, json } from 'express'
import consola from 'consola'

// User Model
// import User from '../models/user'

const app = Router()
app.use(json())

// @route   POST api/auth/login
// @desc    Verifies the user exist and password matches
// @access  Public

app.post('/login', (req, res) => {
  let errMessage = ''

  try {
    const { email, password } = req.body.loginInfo

    if (!email || !password) {
      consola.log(req.body.registrationInfo)
      errMessage = 'All fields are required '
      throw new Error(errMessage)
    }

    res.json({
      token: '7178363637283729'
    })
  } catch (e) {
    res.status(401).json({ message: errMessage })
    consola.log(e.message)
  }
})

// @route   POST api/auth/register
// @desc    Creates a new user
// @access  Public

app.post('/register', (req, res) => {
  let errMessage = ''

  try {
    const { name, email, password } = req.body.registrationInfo

    if (!name || !email || !password) {
      consola.log(req.body.registrationInfo)
      errMessage = 'All fields are required'
      throw new Error(errMessage)
    }

    res.status(200).json({
      data: '7178363637283729'
    })
  } catch (e) {
    consola.error(e.message)
    res.status(401).json({ message: errMessage })
  }
})

// @route   GET api/auth/user
// @desc    Required by Auth.loginWith
// @access  Public

app.get('/user', (req, res) => {
  try {
    req.user = {
      id: '9278220838',
      name: 'Frida',
      email: 'frida@hrsdc-rhdcc.gc.ca',
      role: 'normal'
    }

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
