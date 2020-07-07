import Contacts from '../../api/models/contact'
import Engagements from '../../api/models/engagement'
import Tags from '../../api/models/tags'
import * as db from '../dbHelper'
import * as Randomizers from './randomizers'

// User defined number of appointments and location documents to create
const numContacts = process.env.NUM_CONTACTS || 10
const numEngagements = process.env.NUM_ENGAGEMENTS || 5

const populateDatabase = async() => {
  for (let i = 0; i < numContacts; i++) {
    await Contacts.create({
      type: Randomizers.randomContactType(),
      orgName: Randomizers.randomOrgName(),
      orgSector: Randomizers.randomOrgSector(),
      orgEmail: `${Randomizers.randomString(10)}@example.com`,
      orgAddress: Randomizers.randomString(5),
      orgAddress2: Randomizers.randomString(8),
      orgCity: Randomizers.randomString(6),
      orgProvState: Randomizers.randomString(6),
      orgCountry: Randomizers.randomString(7),
      orgPostalCode: `${Randomizers.randomString(1)}${Randomizers.randomInt(
        1,
        9
      )}${Randomizers.randomString(1)}${Randomizers.randomInt(
        1,
        9
      )}${Randomizers.randomString(1)}${Randomizers.randomInt(1, 9)}`,
      orgPhone: Randomizers.randomInt(1000000000, 9999999999),
      orgWebsite: `http://${Randomizers.randomString(8)}.com`,
      keyContactName: `${Randomizers.randomString(
        6
      )} ${Randomizers.randomString(8)}`,
      keyContactTitle: `title_${Randomizers.randomString(8)}`,
      keyContactEmail: `${Randomizers.randomString(10)}@example.com`,
      keyContactAddress: Randomizers.randomString(5),
      keyContactAddress2: Randomizers.randomString(8),
      keyContactCity: Randomizers.randomString(6),
      keyContactProvState: Randomizers.randomString(6),
      keyContactCountry: Randomizers.randomString(6),
      keyContactPostalCode: `${Randomizers.randomString(
        1
      )}${Randomizers.randomInt(1, 9)}${Randomizers.randomString(
        1
      )}${Randomizers.randomInt(1, 9)}${Randomizers.randomString(
        1
      )}${Randomizers.randomInt(1, 9)}`,
      keyContactPhone: Randomizers.randomInt(1000000000, 9999999999),
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
      subject: Randomizers.randomString(10),
      date: Date(),
      description: Randomizers.randomString(150),
      numParticipants: Randomizers.randomInt(2, 5),
      contacts: [],
      policyProgram: Randomizers.randomString(12),
      comments: [],
      tags: Randomizers.randomTagArray()
    })
  }

  Randomizers.tags.forEach(async(tag) => {
    await Tags.create({
      name: tag
    })
  })

  const engagementDocs = await Engagements.find()
  const contactDocs = await Contacts.find()
  const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms))

  const createRelations = function() {
    return new Promise((resolve, reject) => {
      engagementDocs.forEach(async(engagement, index) => {
        const contactList = []
        await waitFor(50)
        for (let k = 0; k < engagement.numParticipants; k++) {
          const randomContact =
            contactDocs[Math.floor(Math.random() * contactDocs.length)]
          contactList.push(randomContact._id)
        }
        engagement.contacts = contactList
        await saveDocument(engagement).then(async() => {
          await getEngagementContacts(engagement).then(async(contacts) => {
            await createContactRelations(contacts, engagement)
          })
          if (index === engagementDocs.length - 1) {
            resolve()
          }
        })
      })
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

  const getEngagementContacts = (engagement) => {
    return Contacts.find()
      .where('_id')
      .in(engagement.contacts)
      .exec()
  }

  const createContactRelations = (contacts, engagement) => {
    return new Promise((resolve, reject) => {
      contacts.forEach(async(contact, index) => {
        waitFor(50)
        contact.engagements.push(engagement._id)
        await saveDocument(contact).then(() => {
          if (index === contacts.length - 1) {
            resolve()
          }
        })
      })
    })
  }

  createRelations().then(() => {
    db.close()
  })
}

const saveDocument = (document) => {
  return document.save()
}

async function main() {
  await db.init().then(async() => {
    await populateDatabase()
  })
}

main()
