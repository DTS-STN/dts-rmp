<template>
  <div class="pt-1 xl:mx-16">
    <app-nav-adding />
    <contact-form />
  </div>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm.vue'

export default {
  components: {
    'contact-form': ContactForm
  }
}
</script>
