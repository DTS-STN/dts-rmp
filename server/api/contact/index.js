import { Router, json } from 'express'
import consola from 'consola'

// Contact Model
import Contact from '../models/contact'

const app = Router()
app.use(json()) // not required here

// @route   GET api/contacts
// @desc    Gets all contacts
// @access  Public

app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find()

    if (!contacts) {
      consola.error('No contacts exist')
      throw new Error('No contacts exist')
    }
    // implicit else
    res.json(contacts)
  } catch (e) {
    res.status(400)
    consola.error(e.message)
  }
})

// @route   GET api/contact/id
// @desc    Gets/find a contact by id
// @access  Public

app.get('/contact', async (req, res) => {
  try {
    const contact = await Contact.findById(req.query.id)

    if (!contact) {
      consola.error('No contact exist')
      throw new Error('No contact exist')
    }
    // implicit else
    res.json(contact)
  } catch (e) {
    res.status(400)
    consola.error(e.message)
  }
})

// @route   POST api/contact/add
// @desc    Post creates a new contact
// @access  Public

app.post('/addContact', async (req, res) => {
  let errMessage = ''

  try {
    const { keyContactEmail } = req.body.contactInfo

    if (!keyContactEmail) {
      errMessage = 'All fields are required'
      throw new Error(errMessage)
    }

    const contact = await Contact.findOne({ keyContactEmail })

    if (contact) {
      consola.error('Email already exist')
      errMessage = 'There was a problem (email already exist)'
      throw new Error(errMessage)
    }

    const newContact = new Contact(req.body.contactInfo)

    const savedContact = await newContact.save()

    if (!savedContact) {
      consola.error('There was an error creating a new contact ')
      errMessage = 'A new contact could not be created try again later'
      throw new Error(errMessage)
    }

    res.status(200).json({
      contact: {
        id: savedContact._id
      }
    })
  } catch (e) {
    consola.error(e.message)
    res.status(401).json({ message: errMessage })
  }
})

export default app
