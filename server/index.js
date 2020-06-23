const express = require('express')
const mongoose = require('mongoose')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
require('dotenv').config()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

// build connection string with password
const db = process.env.VUE_APP_CONNECTION_STRING
  ? process.env.VUE_APP_CONNECTION_STRING.replace(
    '-password-',
    process.env.VUE_APP_RMP_DB_PASSWORD
  )
  : 'empty connection string check environment vars'

function connectDb() {
  mongoose.set('useCreateIndex', true)
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      consola.ready({ message: 'Database is connected', badge: true })
    })
    .catch((err) => {
      consola.error(new Error(err))
    })
}

start().then(() => connectDb())
