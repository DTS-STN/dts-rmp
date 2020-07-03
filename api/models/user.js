import { Schema, model } from 'mongoose'

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^(?=[a-zA-Z]{3,}$)/.test(v)
      }
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return /^([\w-.])+@hrsdc-rhdcc.gc.ca$/.test(v)
      }
    }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'normal'
  },
  register_date: {
    type: Date,
    default: Date.now
  }
})

const User = model('User', UserSchema)

export default User
