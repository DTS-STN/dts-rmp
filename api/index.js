import express from 'express'
import engagement from './routes/engagement.js'
import contact from './routes/contact.js'
import user from './routes/user.js'
import auth from './routes/auth.js'
const mongoose = require('mongoose')
const consola = require('consola')
const morgan = require('morgan')

require('dotenv').config()

const app = express()
// HTTP Request logging
app.use(morgan('combined'))
// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.json())

const MONGO_CONNECTION_STRING = process.env.VUE_APP_CONNECTION_STRING
  ? process.env.VUE_APP_CONNECTION_STRING.replace(
    '-password-',
    process.env.VUE_APP_RMP_DB_PASSWORD
  )
  : 'empty connection string check environment vars'

mongoose.set('useCreateIndex', true)
mongoose
  .connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    consola.ready({ message: 'Database is connected', badge: true })
  })
  .catch((err) => {
    consola.error(new Error(err))
  })

app.use('/engagement', engagement)
app.use('/contact', contact)
app.use('/user', user)
app.use('/auth', auth)

module.exports = {
  path: '/api',
  handler: app
}