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
import Eng from '@/components/engagement/EngListItem'
export default {
  components: {
    Eng
  },
  data() {
    return {
      engagements: [
      ],
      filteredEngagements: [
      ]
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const res = await this.$axios.get('/api/engagement/engagements', config)
      this.engagements = res.data
      this.filteredEngagements = res.data
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },
  methods: {
    filter(input) {
      const searchtext = input.toLowerCase()
      const results = this.engagements.filter(engagement =>
        engagement.type.toLowerCase().includes(searchtext)
      )
      this.filteredEngagements = results
    }
  }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.main {
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
