// Returns a random integer within the given integer range
export function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
}

export function randomContactType() {
  const types = [
    'Federal Governments and Agencies',
    'External Stakeholders',
    'Provincial Teritories/Municipal and Indigenous entities'
  ]
  return types[Math.floor(Math.random() * types.length)]
}

export function randomEngagementType() {
  const types = [
    'One-On-One',
    'Conference',
    'Conference Call',
    'Task Team',
    'Workshop',
    'Webinar',
    'Phone Call',
    'Committee meeting',
    'Working Group',
    'Senior management Briefing',
    'Minister Office briefing',
    'Scrum/Sprint',
    'Advisory Board/Council Meeting'
  ]
  return types[Math.floor(Math.random() * types.length)]
}

export function randomOrgName() {
  const names = [
    'Generic Charity',
    'Private Compant Ltd.',
    'Indigenous Awareness Committee',
    'International Committee',
    'Accomodations Committee',
    'Waste Management Organization'
  ]
  return names[Math.floor(Math.random() * names.length)]
}

// Returns a random date within the given range of Date objects
export function randomOrgSector() {
  const orgs = [
    'Not For Profit',
    'Private',
    'Indigenous',
    'Internation',
    'Accomodations',
    'Waste Management'
  ]
  return orgs[Math.floor(Math.random() * orgs.length)]
}

// Return a random ID from the array of IDs
export function getBioKitId() {
  const ids = ['a1234', 'b3456']
  return ids[Math.floor(Math.random() * ids.length)]
}

// Return array of BioKit models with distinct property values
export function generateSampleBioKits(number) {
  const bioKits = []
  for (let index = 1; index <= number; index++) {
    bioKits.push(
      new BiokitModel({
        bioKitId: index,
        accessible: index % 2,
        private: index % 2,
        available: index !== 2
      })
    )
  }
  return bioKits
}

export function randomTimezone(index) {
  return index % 2 ? 'America/Toronto' : 'America/Vancouver'
}

// Returns an alphanueric string of a given length
export function randomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < length; i++) {
    const rnum = Math.floor(Math.random() * chars.length)
    result += chars.substring(rnum, rnum + 1)
  }
  return result
}

// Returns a string in the format of the BIL# (1 letter followed by 12 digits)
export function randomBil() {
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ'
  const numbers = '1234567890'
  let result = ''
  const rchar = Math.floor(Math.random() * char.length)
  result += char.substring(rchar, rchar + 1)
  for (let i = 0; i < 12; i++) {
    const rnum = Math.floor(Math.random() * numbers.length)
    result += numbers.substring(rnum, rnum + 1)
  }
  return result
}

// Returns random province from array
export function randomProvince() {
  const provinces = [
    'Ontario',
    'Saskatchewan',
    'Alberta',
    'British Columbia',
    'Prince Edward Island',
    'Nova Scotia',
    'Newfoundland and Labrador',
    'New Brunswick',
    'Manitoba',
    'Quebec'
  ]
  return provinces[Math.floor(Math.random() * provinces.length)]
}

export const tags = [
  'Business Delivery',
  'Development',
  'Architercture',
  'Planning',
  'DevOps',
  'Project Management'
]

export function randomTagArray() {
  const tagArray = []
  for (let i = 0; i < 3; i++) {
    tagArray.push(tags[Math.floor(Math.random() * tags.length)])
  }
  return tagArray
}

// Returns random timeslot for use in generating appointment date objects
export function randomTimeSlot() {
  const timeslots = [0, 15, 30, 45]
  return timeslots[Math.floor(Math.random() * timeslots.length)]
}