import Contacts from '../../server/api/models/contact'
import Engagements from '../../server/api/models/engagement'
import * as db from '../dbHelper'
import * as Randomizers from './randomizers'

// User defined number of appointments and location documents to create
const numContacts = process.env.NUM_CONTACTS || 10
const numEngagements = process.env.NUM_ENGAGEMENTS || 5

const populateDatabase = async () => {
  for (let i = 0; i < numContacts; i++) {
    await Contacts.create({
      type: Randomizers.randomContactType(),
      orgName: Randomizers.randomOrgName(),
      orgSector: Randomizers.randomOrgSector(),
      orgEmail: `${Randomizers.randomString(10)}@example.com`,
      orgPhone: Randomizers.randomInt(1000000000, 9999999999),
      orgAddress: Randomizers.randomString(15),
      orgWebsite: `http://${Randomizers.randomString(8)}.com`,
      keyContactName: `${Randomizers.randomString(
        6
      )} ${Randomizers.randomString(8)}`,
      keyContactTitle: Randomizers.randomString(8),
      keyContactEmail: `${Randomizers.randomString(10)}@example.com`,
      keyContactAddress: Randomizers.randomString(15),
      department: Randomizers.randomString(4).toUpperCase(),
      branch: Randomizers.randomString(4).toUpperCase(),
      directorate: Randomizers.randomString(15),
      provTerritory: Randomizers.randomProvince(),
      contributionRefNo: Randomizers.randomInt(1000000, 999999),
      serviceContrNo: Randomizers.randomInt(10000, 99999),
      onStandingOffer: !(i % 2),
      engagements: []
    })
  }
  for (let j = 0; j < numEngagements; j++) {
    await Engagements.create({
      type: Randomizers.randomEngagementType(),
      date: Date(),
      description: Randomizers.randomString(150),
      numParticipants: Randomizers.randomInt(2, 5),
      contacts: [],
      tags: []
    })
  }

  const engagementDocs = await Engagements.find()
  const contactDocs = await Contacts.find()
  engagementDocs.forEach(async (engagement) => {
    for (let k = 0; k < engagement.numParticipants; k++) {
      const randomContact =
        contactDocs[Math.floor(Math.random() * contactDocs.length)]
      engagement.contacts.push(randomContact._id)
      await engagement.save((err, document) => {
        if (err) return console.log(err)
        console.log(document)
      })
    }
    // await Contacts.find()
    //   .where('_id')
    //   .in(engagement.contacts)
    //   .exec((err, records) => {
    //     console.log(err)
    //     records.forEach(async (contact) => {
    //       contact.engagements.push(engagement._id)
    //       await contact.save()
    //     })
    //   })
  })
}

async function main() {
  await db.init().then(async () => {
    await populateDatabase()
    db.close()
  })
}

main()
