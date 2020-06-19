const mongoose = require('mongoose')
const ContactModel = require('../../server/api/models/contact')
require('dotenv').config()

const contactData = {
  engagements: [],
  type: 'External Stakeholders',
  orgName: 'Generic Charity',
  orgSector: 'Waste Management',
  orgEmail: 'hakVcwNSHc@example.com',
  orgPhone: '4022071823',
  orgAddress: 'GTWKXMyOtnAyCoy',
  orgWebsite: 'http://myUwFqmG.com',
  keyContactName: 'bIyHaO ihUeVBxp',
  keyContactTitle: 'VnuzOQuf',
  keyContactEmail: 'aaoqtgiXxm@example.com',
  keyContactAddress: 'NHWAkNgqIXaKpeM',
  department: 'PNPP',
  branch: 'MHGN',
  directorate: 'peWGfGHCummvauJ',
  provTerritory: 'Prince Edward Island',
  contributionRefNo: 1000000,
  serviceContrNo: 78776,
  onStandingOffer: true
}

const contactDataInvalidField = {
  engagements: [],
  type: 'External Stakeholders',
  orgName: 'Generic Charity',
  orgSector: 'Waste Management',
  orgEmail: 'hakVcwNSHc@example.com',
  orgPhone: '4022071823',
  orgAddress: 'GTWKXMyOtnAyCoy',
  orgWebsite: 'http://myUwFqmG.com',
  keyContactName: 'bIyHaO ihUeVBxp',
  keyContactTitle: 'VnuzOQuf',
  keyContactEmail: 'aaoqtgiXxm@example.com',
  keyContactAddress: 'NHWAkNgqIXaKpeM',
  keyContactFavouriteMovie: 'Falling Down',
  department: 'PNPP',
  branch: 'MHGN',
  directorate: 'peWGfGHCummvauJ',
  provTerritory: 'Prince Edward Island',
  contributionRefNo: 1000000,
  serviceContrNo: 78776,
  onStandingOffer: true
}

const contactDataMissingReqField = {
  engagements: [],
  type: 'External Stakeholders',
  orgName: 'Generic Charity',
  orgSector: 'Waste Management',
  orgEmail: 'hakVcwNSHc@example.com',
  orgPhone: '4022071823',
  orgAddress: 'GTWKXMyOtnAyCoy',
  orgWebsite: 'http://myUwFqmG.com',
  keyContactTitle: 'VnuzOQuf',
  keyContactEmail: 'aaoqtgiXxm@example.com',
  keyContactAddress: 'NHWAkNgqIXaKpeM',
  department: 'PNPP',
  branch: 'MHGN',
  directorate: 'peWGfGHCummvauJ',
  provTerritory: 'Prince Edward Island',
  contributionRefNo: 1000000,
  serviceContrNo: 78776,
  onStandingOffer: true
}

describe('Contact Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect(
      process.env.VUE_APP_CONNECTION_STRING,
      { useNewUrlParser: true, useCreateIndex: true },
      (err) => {
        if (err) {
          console.error(err)
          process.exit(1)
        }
      }
    )
  })

  it('create & save contact successfully', async () => {
    const validContact = new ContactModel(contactData)
    const savedContact = await validContact.save()
    expect(savedContact._id).toBeDefined()
    expect(savedContact.type).toBe(contactData.type)
    expect(savedContact.orgName).toBe(contactData.orgName)
  })

  it('insert contact with invalid field, field should not be saved in db', async () => {
    const contactWithInvalidField = new ContactModel(contactDataInvalidField)
    const savedContactWithInvalidField = await contactWithInvalidField.save()
    expect(savedContactWithInvalidField._id).toBeDefined()
    expect(savedContactWithInvalidField.gender).toBeUndefined()
  })

  it('create contact without required field should fail', async () => {
    const contactWithoutRequiredField = new ContactModel(
      contactDataMissingReqField
    )
    const savedContactWithoutRequiredField = await contactWithoutRequiredField.save()
    expect(savedContactWithoutRequiredField).toBeInstanceOf(
      mongoose.Error.ValidationError
    )
  })
})
