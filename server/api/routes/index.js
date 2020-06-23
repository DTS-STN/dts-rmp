const express = require('express')
const consola = require('consola')
const app = express()
const Engagement = require('../models/engagement')

// @route   GET api/allengagements
// @desc    Gets all existing engagement's in database
// @access  Public
app.get('/allengagements', function(_req, res) {
  Engagement.find((_err, Engagement) => {
    res.json(Engagement)
  }).catch((err) => {
    consola.log(err)
  })
})

// @route   POST api/insertengagement
// @desc    Saves our form data
// @access  Public
app.post('/insertengagement', function(req, res) {
  const saveengagement = new Engagement({
    subject: `${req.query.subject}`,
    contactname: `${req.query.contactname}`,
    notes: `${req.query.notes}`,
    type: `${req.query.type}`
  })
  saveengagement
    .save()
    .then(() => {
      res.status(200).json({ engagement: 'your form was saved' })
    })
    .catch((err) => {
      // catches mongoose validation (SS Validation)
      if (err.name === 'ValidationError') {
        res.status(201).json(err)
      } else {
        consola.log(err)
      }
    })
})

module.exports = { path: '/api/', handler: app }
