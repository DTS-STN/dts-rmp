<template>
  <div class="pt-1 xl:mx-16">
    <ContactForm :editmode="true" :contactdata="contactInfo" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContactForm from '@/components/contact/ContactForm.vue'

export default {
  components: {
    ContactForm
  },

  computed: mapState({
    // eslint-disable-next-line arrow-parens
    contactInfo: (state) => state.contacts.contact
  })
}
</script>

<style scoped></style>
