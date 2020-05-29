<template>
  <div id="form">
    <h1>Create a engagement</h1>
    <Form />
  </div>
</template>
<script>
import Form from '~/components/Form/Form'
export default {
  components: {
    Form
  },
  head() {
    return {
      title: 'Create a engagement',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Create a new engagement!'
        }
      ]
    }
  }
}
</script>
