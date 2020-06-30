import { Schema, model } from 'mongoose'

// Create Schema
const ContactSchema = new Schema({
  type: { type: String, required: true },
  orgName: { type: String, required: false },
  orgSector: { type: String, required: false },
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
  department: { type: String, required: false },
  branch: { type: String, required: false },
  directorate: { type: String, required: false },
  provTerritory: { type: String, required: false },
  contributionRefNo: { type: Number },
  serviceContrNo: { type: Number },
  onStandingOffer: { type: Boolean },
  engagements: [
    { type: Schema.Types.ObjectId, required: true, ref: 'Engagement' }
  ]
})

const Contact = model('Contact', ContactSchema)

export default Contact

// type: {
//   type: String,
//   required: true,
//   default: '1',
//   validate: {
//     validator(v) {
//       return /^([123])$/.test(v)
//     }
//   }
// },
// keyContactName: {
//   type: String,
//   required: true,
//   validate: {
//     validator(v) {
//       return /^(?=[a-z A-Z]{3,}$)/.test(v)
//     }
//   }
// },
// orgPhone: {
//   type: String,
//   validate: {
//     validator(v) {
//       return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/.test(v)
//     }
//   }
// },
// orgEmail: {
//   type: String,
//   required: true,
//   validate: {
//     validator(v) {
//       return /^([\w-.])+@([\w-]+)((\.(\w){2,3})+)$/.test(v)
//     }
//   }
// },
