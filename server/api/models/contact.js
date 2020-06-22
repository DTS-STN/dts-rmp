import { Schema, model } from 'mongoose'

// Create Schema
const ContactSchema = new Schema({
  type: { type: String, required: true },
  orgName: { type: String, required: true },
  orgSector: { type: String, required: true },
  orgEmail: { type: String },
  orgAddress: { type: String },
  orgAddress2: { type: String },
  orgCity: { type: String },
  orgProvState: { type: String },
  orgCountry: { type: String },
  orgPostalCode: { type: String },
  orgPhone: { type: String },
  orgWebsite: { type: String },
  keyContactName: { type: String, required: true },
  keyContactTitle: { type: String, required: true },
  keyContactEmail: { type: String, required: true },
  keyContactAddress: { type: String },
  keyContactAddress2: { type: String },
  keyContactCity: { type: String },
  keyContactProvState: { type: String },
  keyContactCountry: { type: String },
  keyContactPostalCode: { type: String },
  keyContactPhone: { type: String },
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
