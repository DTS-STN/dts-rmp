<template>
  <div class="show-contact grid grid-cols-2 gap-4">
    <div>
      <span>
        {{ name }}
      </span>, {{ orgName }}
      <br />
      {{ email }}
    </div>
    <div v-if="type!=''">
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
    date: { type: Date, default: new Date() },
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
