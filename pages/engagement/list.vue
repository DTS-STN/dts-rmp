<template>
  <div>
    <h1>List All engagements</h1>
    <FilterForm />
  </div>
</template>
<script>
import FilterForm from '../../components/Forms/FilterForm'
export default {
  components: {
    FilterForm
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
