<template>
  <div class="main pt-1 xl:mx-16">
    <app-nav-searching class="my-16 mx-8 sm:mx-12" @filterResults="filter" />
    <div class="mx-12 text-sm font-body font-semibold">
      {{ totalRecords }} results
    </div>
    <!-- Loop through contacts here. look at 'search/engagement' for guidance -->
    <div class="max-w-full px-4 py-6 my-8 md:mx-12 border border-gray-500">
      <!-- Still requires "last" property for last engagement to be setup, discussion on "date" property TODO -->
      <eng-show-contacts
        v-for="(con, index) in filteredContacts"
        :id="con._id"
        :key="index"
        :index="index"
        :name="con.keyContactName"
        :orgname="con.orgName"
        :title="con.keyContactTitle"
        :phone="con.keyContactPhone"
        :email="con.keyContactEmail"
        :last="con.engagements[0] ? con.engagements[0].type : undefined"
        :date="con.engagements[0] ? con.engagements[0].date.substring(0, 10) : undefined"
        :number="con.engagements[0] ? con.engagements[0].numParticipants : undefined"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import EngShowContacts from '@/components/engagement/EngShowContacts.vue'

export default {
  components: {
    'eng-show-contacts': EngShowContacts
  },

  async asyncData({ app, params, store }) {
    try {
      await store.dispatch('contacts/fetchContacts')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error fetching Contacts', e)
    }
  },

  data() {
    return {
      filteredContacts: [],
      totalRecords: 0
    }
  },

  computed: mapState({
    contacts: state => state.contacts.contacts
  }),

  beforeMount() {
    this.filteredContacts = this.contacts
    this.totalRecords = this.contacts.length
  },

  methods: {
    filter(input) {
      const searchText = input.toLowerCase()

      const results = this.contacts.filter((contact) => {
        const values = Object.values(contact)
        let flag = false

        values.forEach((val) => {
          if (typeof val !== 'string') {
            return
          }
          if (val.toLowerCase().includes(searchText)) {
            flag = true
          }
        })
        if (flag === true) {
          return contact
        }
      })

      this.filteredContacts = results
      this.totalRecords = results.length
    }
  }
}
</script>

<style>
</style>
