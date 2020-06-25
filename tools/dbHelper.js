import mongoose from 'mongoose'
import consola from 'consola'
require('dotenv').config()
const db = process.env.VUE_APP_CONNECTION_STRING
  ? process.env.VUE_APP_CONNECTION_STRING.replace(
    '-password-',
    process.env.VUE_APP_RMP_DB_PASSWORD
  )
  : 'empty connection string check environment vars'
// Initialise connection to database
export const init = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(db, {
        useNewUrlParser: true
      })
      .catch(err => consola.ready({ message: err }))

    mongoose.set('useCreateIndex', true)
    return mongoose.connection
      .once('open', () => {
        consola.ready({ message: 'Connection to the database established' })
        resolve()
      })
      .on('error', (error) => {
        consola.ready({ message: `Connection error: ${error}` })
        reject(new Error('Could not connect to mongoDb'))
      })
      .on('disconnected', () => {
        consola.ready({ message: 'Database disconnected' })
      })
  })
}

export const dropLocationsCollection = () => {
  return mongoose.connection.dropCollection('locations')
}

export const close = () => {
  mongoose.connection.close()
}
