import { Schema, model } from 'mongoose'

// Create Schema
const ContactSchema = new Schema({
  type: { type: String, required: true },
  orgName: { type: String, required: true },
  orgSector: { type: String, required: true },
  orgEmail: { type: String, required: true },
  orgPhone: { type: String, required: true },
  orgAddress: { type: String, required: true },
  orgWebsite: { type: String, required: true },
  keyContactName: { type: String, required: true },
  keyContactTitle: { type: String, required: true },
  keyContactEmail: { type: String, required: true },
  keyContactAddress: { type: String },
  department: { type: String },
  branch: { type: String },
  directorate: { type: String },
  provTerritory: { type: String },
  contributionRefNo: { type: Number },
  serviceContrNo: { type: Number },
  onStandingOffer: { type: Boolean },
  engagements: [
    { type: Schema.Types.ObjectId, required: true, ref: 'Engagement' }
  ]
})

const Contact = model('Contact', ContactSchema)

export default Contact
