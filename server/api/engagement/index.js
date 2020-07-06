/* eslint-disable no-console */
import { Router, json } from 'express'
import consola from 'consola'
// engagement Model
import Engagement from '../models/engagement'
const app = Router()
app.use(json())

// @route   GET api/engagement/engagemnts to do
// @desc    Gets all engagement  to do
// @access  Public to do
app.get('/engagements', async(req, res) => {
  try {
    const engagements = await Engagement.find().populate('contacts')
    if (!engagements) {
      consola.error('No engagements exist')
      throw new Error('No engagements exist')
    }
    // implicit else
    res.json(engagements)
  } catch (e) {
    res.status(400)
    consola.error(e.message)
  }
})

// @route   GET api/engagement/engagement/id
// @desc    Gets/find an engagement by id
// @access  Public

app.get('/engagement', async(req, res) => {
  try {
    const engagement = await Engagement.findById(req.query.id)

    if (!engagement) {
      consola.error('No engagement exist')
      throw new Error('No engagement exist')
    }
    // implicit else
    res.json(engagement)
  } catch (e) {
    res.status(400)
    consola.error(e.message)
  }
})

// @route   POST api/engagement/add
// @desc    Post creates a new engagement
// @access  Public
// eslint-disable-next-line space-before-function-paren
app.post('/addEngagement', async (req, res) => {
  let errMessage = ''

  // to do

  try {
    const newEngagement = new Engagement(req.body.engagementDetail)
    const savedEngagementDetail = await newEngagement.save()
    if (!savedEngagementDetail) {
      consola.error('There was an error creating a new Engagement ')
      errMessage = 'A new Engagement could not be created try again later'
      throw new Error(errMessage)
    }
    res.status(200).json({
      engagement: {
        id: savedEngagementDetail._id
      }
    })
  } catch (e) {
    consola.error(e.message)
    res.status(401).json({ message: errMessage })
  }
})
export default app
