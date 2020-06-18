import { Schema, model } from 'mongoose'

const TagSchema = new Schema({ name: { type: String, required: true } })

const Tag = model('Tag', TagSchema)

export default Tag
