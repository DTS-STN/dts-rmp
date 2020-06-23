import { Router, json } from 'express'
import consola from 'consola'

// Contact Model
import Contact from '../models/contact'

const app = Router()
app.use(json()) // not required here

// @route   GET api/contacts
// @desc    Gets all contacts
// @access  Public

app.get('/contacts', async(req, res) => {
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

app.get('/contact', async(req, res) => {
  try {
    const contact = await Contact.findById()

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

export default app
