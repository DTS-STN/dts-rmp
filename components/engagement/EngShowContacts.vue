<template>
  <div class="show-contact grid grid-cols-2 gap-4">
    <div>
      <span>
        {{ contactName }}
      </span>, {{ department }}
    </div>
    <div v-if="engType != ''">
      <span>
        {{ engType }}
      </span>
    </div>
    <div>
      {{ contactEmail }}
    </div>
    <div v-if="engType != ''">
      {{ engDate + ', ' + participants + ' '}} {{ $t('engagement.otherParticipants') }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contactName: { type: String, default: '' },
    department: { type: String, default: '' },
    contactEmail: { type: String, default: '' },
    engType: { type: String, default: '' },
    engDate: { type: Date, default: new Date() },
    participants: { type: Number, default: 0 }
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
