<template>
  <div class="show-contact grid grid-cols-2 gap-4">
    <div>
      <span>
        {{ contactName }}
      </span>, {{ department }}
    </div>
    <div>
      <span>
        {{ lastEngTitle }}
      </span>
    </div>
    <div>
      {{ contactEmail }}
    </div>
    <div>
      {{ engagementDate + ', ' + numParticipants + ' other participants' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contactName: { type: String, default: '' },
    department: { type: String, default: '' },
    contactEmail: { type: String, default: '' },
    lastEngTitle: { type: String, default: '' },
    engagementDate: { type: Date, default: new Date() },
    numParticipants: { type: Number, default: 0 }
  }
}
</script>

<style scoped>
  .show-contact {
    @apply border-t border-b border-gray-400 p-5 mt-10 w-6/12;
  }
  span {
    @apply text-rmp-orange font-bold
  }
</style>
