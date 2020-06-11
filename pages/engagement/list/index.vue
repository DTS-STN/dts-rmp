<template>
  <div class="px-5 h-auto">
    <FilterForm @FilterEngagements="filter" />
    <Engagement
      v-for="engagement in engagements"
      :id="engagement.id"
      :key="engagement.id"
      :title="engagement.title"
    />
  </div>
</template>
<script>
import FilterForm from '../../../components/Forms/FilterForm'
export default {
  components: {
    FilterForm
  },
  data() {
    return {
      engagements: [
        {
          id: 16,
          title: 'First Engagement'
        },
        {
          id: 1,
          title: 'Meeting with the team'
        },
        {
          id: 71,
          title: 'First video conference'
        }
      ]
    }
  },
  async created() {
    // Here make the call to the API to get the engagements using: await axios.get().
  },
  methods: {
    filter(input) {
      const searchtext = input.toLowerCase()
      const results = this.engagements.filter((engagement) =>
        engagement.title.toLowerCase().includes(searchtext)
      )
      this.engagements = results
    }
  },
  head() {
    return {
      title: 'List All engagements',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'List all engagements!'
        }
      ]
    }
  }
}
</script>
