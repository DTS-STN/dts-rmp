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
      context.app.$axios.defaults.baseURL = context.env.API_URL
      const { data } = await context.app.$axios.get(`/api/engagement/engagement?id=${context.route.params.id}`)
      return { engagementDetail: data }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error fetching Contact : ', e)
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
