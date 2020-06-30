import mongoose from 'mongoose'
import ContactModel from '../../server/api/models/contact'
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
  beforeAll(async() => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
          process.exit(1)
        }
      }
    )
  })

  afterAll(async() => {
    await mongoose.connection.close()
  })

  it('create & save contact successfully', async() => {
    const validContact = new ContactModel(contactData)
    const savedContact = await validContact.save()
    expect(savedContact._id).toBeDefined()
    expect(savedContact.type).toBe(contactData.type)
    expect(savedContact.orgName).toBe(contactData.orgName)
  })

  it('create contact with invalid field, field should not be saved in db', async() => {
    const contactWithInvalidField = new ContactModel(contactDataInvalidField)
    const savedContactWithInvalidField = await contactWithInvalidField.save()
    expect(savedContactWithInvalidField._id).toBeDefined()
    expect(savedContactWithInvalidField.gender).toBeUndefined()
  })

  it('create contact without required field should fail', async() => {
    const contactWithoutRequiredField = new ContactModel(
      contactDataMissingReqField
    )
    let err
    try {
      await contactWithoutRequiredField.save()
    } catch (error) {
      err = error
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
  })
})
