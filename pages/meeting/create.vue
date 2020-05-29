<template>
  <div id="form">
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
      title: 'Create a Meeting',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Create a new meeting!'
        }
      ]
    }
  }
}
</script>
