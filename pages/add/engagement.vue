<template>
  <div>
    <!-- <EngForm title="Create new engagement" /> -->
    <EngTest />
  </div>
</template>

<script>
// import EngForm from '@/components/engagement/EngForm'
import EngTest from '@/components/engagement/EngTest.vue'

export default {
  components: {
    // EngForm,
    EngTest
  }
}
</script>

<style scoped>
.title {
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold text-4xl pt-4;
}
</style>
