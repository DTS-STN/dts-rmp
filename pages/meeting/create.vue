<template>
  <div>
    <GeneralInformation />
  </div>
</template>
<script>
import GeneralInformation from '@/components/GeneralInfo'
export default {
  components: {
    GeneralInformation
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
<style scoped>
.headerImg {
  @apply w-full;
  height: 648px;
}
</style>
