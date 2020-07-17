<template>
  <div class="main pt-1 xl:mx-16">
    <app-nav-searching class="my-16 mx-8 sm:mx-12" @filterResults="filter" />

    <div class="mx-12 text-sm font-body font-semibold">
      {{ totalRecords }} results
    </div>

    <div class="max-w-full px-4 py-6 my-8 md:mx-12 border border-gray-500">
      <contact-show-engagement
        v-for="(eng, index) in filteredEngagements"
        :id="eng._id"
        :key="index"
        :subject="eng.subject"
        :index="index"
        :type="eng.type"
        :contacts="eng.contacts"
        :tags="eng.tags"
        :date="(eng.date).substring(0, 10)"
        :description="eng.description"
        :number="eng.numParticipants"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ConShowEngagements from '@/components/contact/ConShowEngagements.vue'

export default {
  components: {
    'contact-show-engagement': ConShowEngagements
  },

  async asyncData({ app, params, store }) {
    try {
      await store.dispatch('engagements/fetchEngagements')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error fetching Engagements', e)
    }
  },

  data() {
    return {
      filteredEngagements: [],
      totalRecords: 0
    }
  },

  computed: mapState({
    engagements: state => state.engagements.engagements
  }),

  beforeMount() {
    this.filteredEngagements = this.engagements
    this.totalRecords = this.engagements.length
  },

  methods: {
    filter(input) {
      const searchText = input.toLowerCase()

      const results = this.engagements.filter((engagement) => {
        const values = Object.values(engagement)
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
          return engagement
        }
      })

      this.filteredEngagements = results
      this.totalRecords = results.length
    }
  }

}
</script>

<style>
.main {
  min-height: 100vh;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  @apply pt-12;
  @apply text-center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
