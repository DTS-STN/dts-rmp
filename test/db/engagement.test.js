const mongoose = require('mongoose')
const ContactModel = require('../../server/api/models/contact')

const engagementData = {
  contacts: [],
  tags: ['Architercture', 'Planning', 'Business Delivery'],
  type: 'Scrum/Sprint',
  date: Date('2020-06-19T15:04:35.000Z'),
  description:
    'PSMJCyefyOcVVkNmuFVqZkLZTKMzLOfgtuudqrpVODrAvrKgpFMFlCgKnWKqNSITxCLXQbCBTuTyZPfeEFGXDvHmKbccxsRTTWolybkkOXCBPfeERNIdWxguugCWLybnTFvqDNBZPmtBXZEOvrPMia',
  numParticipants: 5,
  comments: [],
}

const engagementDataInvalidField = {
  contacts: [],
  tags: ['Architercture', 'Planning', 'Business Delivery'],
  type: 'Scrum/Sprint',
  date: Date('2020-06-19T15:04:35.000Z'),
  description:
    'PSMJCyefyOcVVkNmuFVqZkLZTKMzLOfgtuudqrpVODrAvrKgpFMFlCgKnWKqNSITxCLXQbCBTuTyZPfeEFGXDvHmKbccxsRTTWolybkkOXCBPfeERNIdWxguugCWLybnTFvqDNBZPmtBXZEOvrPMia',
  numParticipants: 5,
  comments: [],
}

const engagementDataMissingReqField = {
  contacts: [],
  tags: ['Architercture', 'Planning', 'Business Delivery'],
  type: 'Scrum/Sprint',
  date: Date('2020-06-19T15:04:35.000Z'),
  description:
    'PSMJCyefyOcVVkNmuFVqZkLZTKMzLOfgtuudqrpVODrAvrKgpFMFlCgKnWKqNSITxCLXQbCBTuTyZPfeEFGXDvHmKbccxsRTTWolybkkOXCBPfeERNIdWxguugCWLybnTFvqDNBZPmtBXZEOvrPMia',
  numParticipants: 5,
  comments: [],
}

describe('Contact Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
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
    const validContact = new ContactModel(engagementData)
    const savedContact = await validContact.save()
    expect(savedContact._id).toBeDefined()
    expect(savedContact.type).toBe(engagementData.type)
    expect(savedContact.orgName).toBe(engagementData.orgName)
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
