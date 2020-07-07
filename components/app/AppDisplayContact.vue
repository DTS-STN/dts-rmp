<template>
  <div class="show-contact grid grid-cols-2 gap-4">
    <div class="border-t border-b border-gray-400 p-5">
      <span>
        {{ name }}
      </span>, {{ orgName }}
      <br />
      {{ email }}
    </div>
    <div v-if="type" class="border-t border-b border-gray-400 p-5">
      <span>
        {{ type }}
      </span>
      <br />
      {{ date + ', ' + participants + ' ' }} {{ $t('engagement.otherParticipants') }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    orgName: { type: String, default: '' },
    email: { type: String, default: '' },
    type: { type: String, default: '' },
    date: { type: String, default: '' },
    participants: { type: Number, default: 0 }
  }
}
</script>

<style scoped>
  .show-contact {
    @apply p-5 mt-4 w-9/12;
  }
  span {
    @apply text-rmp-orange font-bold
  }
</style>
