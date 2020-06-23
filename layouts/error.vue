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
      if (this.error.statusCode === 404) {
        // eslint-disable-next-line semi
        return Error404
      }
      // catch everything else
      // eslint-disable-next-line semi
      return Error500
    }
  }
}
</script>
