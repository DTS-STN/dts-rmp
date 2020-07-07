import { Schema, model } from 'mongoose'

const EngagementSchema = new Schema({
  type: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  numParticipants: { type: Number, required: true },
  contacts: [{ type: Schema.Types.ObjectId, required: true, ref: 'Contact' }],
  policyProgram: { type: String },
  comments: [{ user: String, content: String, date: Date }],
  tags: [{ type: String }]
})

const Engagement = model('Engagement', EngagementSchema, true)

export default Engagement
