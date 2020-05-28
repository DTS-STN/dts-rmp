const mongoose = require('mongoose')

const engagementSchema = new mongoose.Schema(
  {
    // Allows for alpha only string of at least 3 characters
    subject: {
      type: String,
      validate: {
        validator(v) {
          return /^(?=[a-zA-Z]{3,}$)/.test(v)
        }
      }
    },
    notes: {
      type: String,
      validate: {
        validator(v) {
          return /^(?=[a-zA-Z]{3,}$)/.test(v)
        }
      }
    },
    // Allows for alpha only string of at least 3 characters
    contactname: {
      type: String,
      validate: {
        validator(v) {
          return /^(?=[a-zA-Z]{3,}$)/.test(v)
        }
      }
    },

    type: {
      type: String,
      validate: {
        validator(v) {
          return /^(?=[a-zA-Z0-9\s.,]{3,}$)/.test(v)
        }
      }
    }
  },
  // valid email address
  // email: {
  //   type: String,
  //   validate: {
  //     validator(v) {
  //       return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
  //     }
  //   }
  // },

  // Allows for alpha, numbers, space ',' and '.' with a minimum lenght of 3

  { collection: 'engagement' }
)

module.exports = mongoose.model('engagement', engagementSchema)
