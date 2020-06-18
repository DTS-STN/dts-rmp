import { Schema, model } from 'mongoose'

// Create Schema
const ContactSchema = new Schema({
  type: {
    type: String,
    required: true,
    default: '1',
    validate: {
      validator(v) {
        return /^([123])$/.test(v)
      }
    }
  },
  keyContactName: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^(?=[a-z A-Z]{3,}$)/.test(v)
      }
    }
  },
  keyContactTitle: {
    type: String // ,
    // required: true
  },
  keyContactAddress: {
    type: String // ,
    // required: true
  },
  keyContactEmail: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return /^([\w-.])+@([\w-]+)((\.(\w){2,3})+)$/.test(v)
      }
    }
  },
  orgWebsite: {
    type: String // ,
    // required: true
  },
  orgName: {
    type: String,
    // required: true,
    default: ''
  },
  orgAddress: {
    type: String // ,
    // required: true
  },
  orgPhone: {
    type: String,
    validate: {
      validator(v) {
        return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/.test(v)
      }
    }
  },
  orgSector: {
    type: String // ,
    // required: true
  },
  orgEmail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^([\w-.])+@([\w-]+)((\.(\w){2,3})+)$/.test(v)
      }
    }
  },
  contributionRefNo: {
    type: String // ,
    // required: true
  },
  serviceContrNo: {
    type: String // ,
    // required: true
  },
  onStandingOffer: {
    type: Boolean
  },
  department: {
    type: String // ,
    // required: true
  },
  branch: {
    type: String // ,
    // required: true
  },
  directorate: {
    type: String // ,
    // required: true
  },
  provTerritory: {
    type: String // ,
    // required: true
  },
  stampdate: {
    type: Date,
    default: Date.now
  }
})

const Contact = model('Contact', ContactSchema)

export default Contact
