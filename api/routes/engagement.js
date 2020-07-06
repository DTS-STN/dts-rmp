import { Router } from 'express'
import consola from 'consola'
import Engagement from '../models/engagement'

const router = Router()

// @route   GET api/engagement/engagements
// @desc    Gets all engagement from the table and joins with contacts
// @access  Public

router.get('/engagements', async(req, res) => {
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

// @route   GET api/contact/contact/id
// @desc    Gets/find a contact by id
// @access  Public

router.get('/engagement', async(req, res) => {
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

// @route   POST api/engagement/addEngagement
// @desc    Post creates a new engagement
// @access  Public

router.post('/addEngagement', async(req, res) => {
  let errMessage = ''

  // TODO   add validations

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
    res.status(500).json({ message: errMessage })
  }
})

export default router
