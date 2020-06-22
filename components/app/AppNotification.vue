<template>
  <div v-if="message.message != null" class="messageBox" :class="messageType">
    <span>
      {{ message.message }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppMessageBox',

  props: {
    message: { type: Object, required: true }
  },

  data () {
    return {
      timeout: null
    }
  },

  computed: {
    messageType () {
      return ` ${this.message.type}`
    }
  },

  mounted () {
    this.timeout = setTimeout(() => (this.message = ''), 5000)
  },

  beforeDestroy () {
    clearTimeout(this.timeout)
  }
}
</script>

<style scoped>
.messageBox {
  @apply text-center text-2xl align-bottom mb-4 h-12 min-h-0 mt-2 text-black bg-green-700;
}
.error {
  @apply bg-red-700;
}
</style>
