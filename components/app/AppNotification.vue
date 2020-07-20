<template>
  <div v-if="notification.length" class="messageBox">
    <span>
      {{ notification }}
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppMessageBox',

  data() {
    return {
      timeout: null
    }
  },

  computed: mapState({ notification: state => state.notifications.notification }),
  created() {
    this.timeout = setTimeout(() =>
      (this.$store.dispatch('notifications/removeNotification')), 10000)
  }
}
</script>

<style scoped>
.messageBox {
 font-size: 18px !important;
  @apply bg-green-100 border border-green-400 px-4 rounded text-center font-medium mb-4 h-16 pt-3 min-h-0 mt-2 text-green-800;
}
</style>
