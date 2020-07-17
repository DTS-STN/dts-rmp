<template>
  <div class="pt-1 xl:mx-16">
    <app-nav-adding />
    <eng-form />
  </div>
</template>

<script>
import EngForm from '@/components/engagement/EngForm.vue'

export default {
  components: {
    'eng-form': EngForm
  }
}
</script>
