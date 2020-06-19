import { Schema, model } from 'mongoose'

// Create Schema
const ContactSchema = new Schema({
  type: { type: String, required: true },
  orgName: { type: String, required: true },
  orgSector: { type: String, required: true },
  orgEmail: { type: String },
  orgPhone: { type: String },
  orgAddress: { type: String },
  orgWebsite: { type: String },
  keyContactName: { type: String, required: true },
  keyContactTitle: { type: String, required: true },
  keyContactEmail: { type: String, required: true },
  keyContactAddress: { type: String },
  department: { type: String, required: true },
  branch: { type: String, required: true },
  directorate: { type: String, required: true },
  provTerritory: { type: String, required: true },
  contributionRefNo: { type: Number },
  serviceContrNo: { type: Number },
  onStandingOffer: { type: Boolean },
  engagements: [
    { type: Schema.Types.ObjectId, required: true, ref: 'Engagement' }
  ]
})

const Contact = model('Contact', ContactSchema)

export default Contact
