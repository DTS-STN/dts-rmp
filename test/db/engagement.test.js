import mongoose from 'mongoose'
import EngagementModel from '../../server/api/models/engagement'
require('dotenv').config()

const engagementData = {
  engagements: [],
  tags: ['Architercture', 'Planning', 'Business Delivery'],
  type: 'Scrum/Sprint',
  date: Date('2020-06-19T15:04:35.000Z'),
  description:
    'PSMJCyefyOcVVkNmuFVqZkLZTKMzLOfgtuudqrpVODrAvrKgpFMFlCgKnWKqNSITxCLXQbCBTuTyZPfeEFGXDvHmKbccxsRTTWolybkkOXCBPfeERNIdWxguugCWLybnTFvqDNBZPmtBXZEOvrPMia',
  numParticipants: 5,
  comments: []
}

const engagementDataInvalidField = {
  engagements: [],
  tags: ['Architercture', 'Planning', 'Business Delivery'],
  type: 'Scrum/Sprint',
  date: Date('2020-06-19T15:04:35.000Z'),
  time: Date(),
  description:
    'PSMJCyefyOcVVkNmuFVqZkLZTKMzLOfgtuudqrpVODrAvrKgpFMFlCgKnWKqNSITxCLXQbCBTuTyZPfeEFGXDvHmKbccxsRTTWolybkkOXCBPfeERNIdWxguugCWLybnTFvqDNBZPmtBXZEOvrPMia',
  numParticipants: 5,
  comments: []
}

const engagementDataMissingReqField = {
  engagements: [],
  tags: ['Architercture', 'Planning', 'Business Delivery'],
  type: 'Scrum/Sprint',
  description:
    'PSMJCyefyOcVVkNmuFVqZkLZTKMzLOfgtuudqrpVODrAvrKgpFMFlCgKnWKqNSITxCLXQbCBTuTyZPfeEFGXDvHmKbccxsRTTWolybkkOXCBPfeERNIdWxguugCWLybnTFvqDNBZPmtBXZEOvrPMia',
  numParticipants: 5,
  comments: []
}

describe('engagement Model Test', () => {
  beforeAll(async () => {
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

  it('create & save engagement successfully', async () => {
    const validEngagement = new EngagementModel(engagementData)
    const savedEngagement = await validEngagement.save()
    expect(savedEngagement._id).toBeDefined()
    expect(savedEngagement.type).toBe(engagementData.type)
    expect(savedEngagement.description).toBe(engagementData.description)
  })

  it('create engagement with invalid field, field should not be saved in db', async () => {
    const engagementWithInvalidField = new EngagementModel(
      engagementDataInvalidField
    )
    const savedEngagementWithInvalidField = await engagementWithInvalidField.save()
    expect(savedEngagementWithInvalidField._id).toBeDefined()
    expect(savedEngagementWithInvalidField.time).toBeUndefined()
  })

  it('create engagement without required field should fail', async () => {
    const engagementWithoutRequiredField = new EngagementModel(
      engagementDataMissingReqField
    )
    let err
    try {
      await engagementWithoutRequiredField.save()
    } catch (error) {
      err = error
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
  })
})
