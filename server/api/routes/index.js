const express = require('express')
const consola = require('consola')
const app = express()
const Kmp = require('../models/kmp')

// @route   GET api/allpocs
// @desc    Gets all existing PoC's in database
// @access  Public
app.get('/allkmps', function(_req, res) {
  Kmp.find((_err, kmp) => {
    res.json(kmp)
  }).catch((err) => {
    consola.log(err)
  })
})

// @route   POST api/insertpoc
// @desc    Saves our form data
// @access  Public
app.post('/insertkmp', function(req, res) {
  const savekmp = new Kmp({
    fname: `${req.query.fname}`,
    lname: `${req.query.lname}`,
    email: `${req.query.email}`,
    message: `${req.query.message}`
  })
  savekmp
    .save()
    .then(() => {
      res.status(200).json({ kmp: 'your form was saved' })
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
