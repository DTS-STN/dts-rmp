# dts-rmp 

> relationship management portal proof of concept

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Setup and Seed Local Database

**Required .env variables:**

VUE_APP_CONNECTION_STRING=mongodb://localhost:27017/db

This is required to make the connection to the mongodb container.

**Optional variables:**

NUM_ENGAGEMENTS, NUM_CONTACTS

These variables let you define the number of Engagement documents and Contact documents, respectively, that will be added to the database during seeding.

For local development, use a mongo docker container with no config..

1. npm run mongodb
2. npm run seed
