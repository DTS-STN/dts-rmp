const mongoose = require('mongoose')

const rmpSchema = new mongoose.Schema(
  {
    // Allows for alpha only string of at least 3 characters
    fname: {
      type: String,
      validate: {
        validator(v) {
          return /^(?=[a-zA-Z]{3,}$)/.test(v)
        }
      }
    },

    // Allows for alpha only string of at least 3 characters
    lname: {
      type: String,
      validate: {
        validator(v) {
          return /^(?=[a-zA-Z]{3,}$)/.test(v)
        }
      }
    },

    // valid email address
    email: {
      type: String,
      validate: {
        validator(v) {
          return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
        }
      }
    },

    // Allows for alpha, numbers, space ',' and '.' with a minimum lenght of 3
    message: {
      type: String,
      validate: {
        validator(v) {
          return /^(?=[a-zA-Z0-9\s.,]{3,}$)/.test(v)
        }
      }
    }
  },
  { collection: 'rmp' }
)

module.exports = mongoose.model('Rmp', rmpSchema)
