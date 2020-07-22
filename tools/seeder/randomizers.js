// Returns a random integer within the given integer range
export function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
}

export function randomContactType() {
  const types = [
    'Federal', //      = 'Federal Governments and Agencies',
    'External', //     = 'External Stakeholders',
    'Provincial', //   = 'Provincial Teritories/Municipal and Indigenous entities',
    'International' // = 'International Stakeholders'
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
    'notProfit', //    Not for profit organizations, Municipal governements, Indigenious organizations
    'forProfit', //    For-profit organizations,
    'provGovCorp', // Provincial and territorial government Insititutions agencies and crown corporations
    'fedGovDept' //    Federal government departments and agencies and other publicly funded entities
  ]
  return orgs[Math.floor(Math.random() * orgs.length)]
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

// Returns random province from array
export function randomProvince() {
  const provinces = [
    'ON', //  = 'Ontario',
    'SK', //  = 'Saskatchewan',
    'AB', //  = 'Alberta',
    'BC', //  = 'British Columbia',
    'PEI', // = 'Prince Edward Island',
    'NS', //  = 'Nova Scotia',
    'NFL', // = 'Newfoundland and Labrador',
    'NB', //  = 'New Brunswick',
    'MB', //  = 'Manitoba',
    'QC', //  = 'Quebec'
    'NWT', // = 'Northwestern Territories'
    'NU', //  = 'Nunavut'
    'YK' //   = 'Yukon'
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

export function randomDateBeforeDate(start, days) {
  return new Date(start.getTime() + Math.random() * days * 24 * 60 * 60 * 1000)
}

// Returns random names from array
export function randomNames() {
  const names = [
    'Cate Blanchett',
    'Natalie Portman',
    'Uma Thurman',
    'Helena Bonham Carter',
    'Frances McDormand',
    'Meryl Streep',
    'Sigourney Weaver',
    'Charlize Theron',
    'Robert De Niro',
    'Al Pacino',
    'Leonardo DiCaprio',
    'Tom Hanks',
    'Denzel Washington',
    'Michael Caine',
    'Morgan Freeman'
  ]
  return names[Math.floor(Math.random() * names.length)]
}

// Returns random titles from array
export function randomTitles() {
  const titles = [
    'Sr Developer',
    'Sales representative',
    'Director',
    'CEO',
    'Producer',
    'Consultant'
  ]
  return titles[Math.floor(Math.random() * titles.length)]
}

// Returns random cities from array
export function randomCities() {
  const cities = [
    'Ottawa',
    'Toronto',
    'Paris',
    'New York',
    'Los Angeles',
    'Calgary',
    'Kanata',
    'Ciudad de Mexico',
    'Tokio'
  ]
  return cities[Math.floor(Math.random() * cities.length)]
}

// Returns random provinces from array
export function randomProvState() {
  const provState = [
    'Ontario',
    'Alberta',
    'Paris',
    'New York',
    'California',
    'Manitoba',
    'Mexico DF',
    'Tokio'
  ]
  return provState[Math.floor(Math.random() * provState.length)]
}

// Returns random country from array
export function randomCountry() {
  const countries = [
    'Canada',
    'France',
    'USA',
    'Mexico',
    'Spain',
    'Singapore',
    'Japan'
  ]
  return countries[Math.floor(Math.random() * countries.length)]
}
