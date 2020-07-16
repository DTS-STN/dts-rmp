<template>
  <div class="NuxtError">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import Error404 from '~/components/error/404.vue'
import Error500 from '~/components/error/500.vue'

export default {
  name: 'NuxtError',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorPage() {
      // eslint-disable-next-line no-console
      console.log('error : ', this.error.message)
      return (this.error.statusCode === 404) ? Error404 : Error500
    }
  }
}
</script>
