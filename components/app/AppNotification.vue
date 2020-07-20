<template>
  <div
    v-if="notification.length"
    class="positionBox"
  >
    <div class="messageBox w-3/4 h-3/4">
      <div class="mt-8 p-2">
        {{ notification }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AppMessageBox',
  computed: mapState({ notification: state => state.notifications.notification })
}
</script>
<style scoped>
.positionBox{
  @apply fixed mx-auto h-6 inset-0 flex items-center justify-center;
}
.messageBox {
 @apply relative bg-green-100 border border-green-400 rounded text-center font-medium text-green-800;
}
</style>
