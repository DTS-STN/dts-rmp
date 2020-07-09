import { Router } from 'express'
import consola from 'consola'
import Engagement from '../models/engagement'

const router = Router()

// @route   GET api/engagement/engagements
// @desc    Gets all engagements from the table and join with contacts
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

// @route   GET api/engagement/engagement/id
// @desc    Gets/find an engagement by id
// @access  Public

router.get('/engagement', async(req, res) => {
  try {
    const engagement = await Engagement.findById(req.query.id).populate('contacts')

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

// @route   POST api/engagement/update/id
// @desc    Post updates an engagement
// @access  Public

router.post('/update', async(req, res) => {
  let errMessage = ''

  try {
    const newEngagement = new Engagement(req.body.engagementDetail)

    const updatedEngagement = await Engagement.findByIdAndUpdate(req.query.id, { $set: newEngagement }, { new: true, useFindAndModify: false })

    if (!updatedEngagement) {
      consola.error('There was an error updating the record ')
      errMessage = 'Changes could not be applied, try again later'
      throw new Error(errMessage)
    }

    res.status(200).json({
      engagement: {
        updatedEngagement
      }
    })
  } catch (e) {
    consola.error(e.message)
    res.status(401).json({ message: errMessage })
  }
})

export default router
