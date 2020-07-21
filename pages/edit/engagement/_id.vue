<template>
  <div class="pt-1 xl:mx-16">
    <eng-edit-form :engagement-detail="engagementDetail" />
  </div>
</template>

<script>
import EngEditFormVue from '../../../components/engagement/EngEditForm.vue'

export default {
  components: {
    'eng-edit-form': EngEditFormVue
  },
  async asyncData(context) {
    try {
      context.app.$axios.defaults.baseURL = context.$config.API_URL
      console.log(context.app.$axios.defaults.baseURL)
      const { data } = await context.app.$axios.get(`/api/engagement/engagement?id=${context.route.params.id}`)
      return { engagementDetail: data }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error fetching Engagement : ', e)
    }
  },

  data() {
    return {
      engagementDetail: {}
    }
  }
}
</script>

<style scoped></style>
