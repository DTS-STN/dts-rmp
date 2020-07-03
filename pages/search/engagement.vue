<template>
  <div class="main pt-1">
    <div>
      <h1 class="title">
        {{ $t('app.dts') }}
      </h1>
      <h2 class="subtitle">
        Engagement
      </h2>
    </div>

    <AppNavSearching @filterResults="filter" />

    <Eng
      v-for="eng in filteredEngagements"
      :id="eng._id"
      :key="eng._id"
      :type="eng.type"
      :contacts="eng.contacts"
      :tags="eng.tags"
      :date="eng.date"
      :description="eng.description"
      :participants="eng.numParticipants"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Eng from '@/components/engagement/EngListItem'

export default {
  components: {
    Eng
  },

  async fetch() {
    try {
      await this.$store.dispatch('engagements/fetchEngagements')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error fetching Engagements', e)
    }
  },

  data() {
    return {
      filteredEngagements: []
    }
  },

  computed: mapState({
    engagements: state => state.engagements.engagements
  }),

  beforeMount() {
    this.filteredEngagements = this.engagements
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
