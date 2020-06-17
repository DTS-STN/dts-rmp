import mongoose from 'mongoose'
import consola from 'consola'
import locationModel from '../src/models/location.model'
require('dotenv').config()

const mongoUser = process.env.MONGO_USER || ''
const mongoPassword = process.env.MONGO_PASSWORD || ''
const mongoURI = process.env.MONGO_URI
const mongoPort = process.env.MONGO_PORT
const mongoDB = process.env.MONGO_DATABASE

// Initialise connection to database
export const init = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        `mongodb://${mongoUser}:${mongoPassword}@${mongoURI}:${mongoPort}/${mongoDB}`,
        {
          useNewUrlParser: true
        }
      )
      .catch((err) => consola(err))

    mongoose.set('useCreateIndex', true)
    return mongoose.connection
      .once('open', () => {
        consola('Connection to the database established')
        resolve()
      })
      .on('error', (error) => {
        consola(`Connection error: ${error}`)
        reject(new Error('Could not connect to mongoDb'))
      })
      .on('disconnected', () => {
        consola('Database disconnected')
      })
  })
}

export const dropLocationsCollection = () => {
  return mongoose.connection.dropCollection('locations')
}

export const close = () => {
  mongoose.connection.close()
}

// Insert an itterable collection of documents to the database
export const insert = (locationModels) => {
  return locationModel.collection.insertMany(locationModels, onInsert)
}

const onInsert = (err) => {
  if (err) {
    consola(err)
  } else {
    consola(`Location documents were successfully stored.`)
  }
}
