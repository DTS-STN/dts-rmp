<template>
  <div>
    <EngForm title="Create new engagement" />
  </div>
</template>

<script>
import EngForm from '@/components/engagement/EngForm'

export default {
  components: {
    EngForm
  }
}
</script>

<style scoped>
.title {
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold text-4xl pt-4;
}
</style>
