<template>
  <div>
    <h1>
      placeholder for view an engagement
    </h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EngagementView',

  components: {},

  async fetch() {
    try {
      await this.$store.dispatch('engagements/fetchEngagement', this.$route.params.id)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error: ', e.response)
    }
  },

  computed: mapState({
    engagement: state => state.engagements.engagement
  })
}
</script>

<style scoped>
</style>
