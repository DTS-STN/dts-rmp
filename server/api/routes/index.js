const express = require('express')
const consola = require('consola')
const app = express()
const Rmp = require('../models/rmp')

// @route   GET api/allrmps
// @desc    Gets all existing RMP's in database
// @access  Public
app.get('/allrmps', function(_req, res) {
  Rmp.find((_err, rmp) => {
    res.json(rmp)
  }).catch((err) => {
    consola.log(err)
  })
})

// @route   POST api/insertrmp
// @desc    Saves our form data
// @access  Public
app.post('/insertrmp', function(req, res) {
  const savermp = new Rmp({
    fname: `${req.query.fname}`,
    lname: `${req.query.lname}`,
    email: `${req.query.email}`,
    message: `${req.query.message}`
  })
  savermp
    .save()
    .then(() => {
      res.status(200).json({ rmp: 'your form was saved' })
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
