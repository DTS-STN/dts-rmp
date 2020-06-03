<template>
  <div>
    <CreateForm />
  </div>
</template>
<script>
import CreateForm from '@/components/Forms/CreateForm'
export default {
  components: {
    CreateForm
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
<style></style>
