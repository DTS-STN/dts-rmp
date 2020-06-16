import { Schema, model } from 'mongoose'

// Create Schema
const ContactSchema = new Schema({
  contact_type: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^(?=[a-zA-Z]{3,}$)/.test(v)
      }
    }
  },
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
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
  website: {
    type: String,
    required: true
  },
  org_name: {
    type: String,
    required: true
  },
  org_address: {
    type: String,
    required: true
  },
  org_sector: {
    type: String,
    required: true
  },
  org_email: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^([\w-.])+@([\w-]+)((\.(\w){2,3})+)$/.test(v)
      }
    }
  },
  org_phone: {
    type: String,
    required: true
  },
  contrib_agreem: {
    type: String,
    required: true
  },
  service_contract: {
    type: String,
    required: true
  },
  standing_offer: {
    type: Boolean
  },
  department: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  directorate: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  stampdate: {
    type: Date,
    default: Date.now
  }
})

const Contact = model('Contact', ContactSchema)

export default Contact
