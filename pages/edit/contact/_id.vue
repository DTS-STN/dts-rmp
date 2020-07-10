<template>
  <div class="pt-1 xl:mx-16">
    <ContactForm2 :editmode="true" :contactdata="contactInfo" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContactForm2 from '@/components/contact/ContactForm.vue'

export default {
  components: {
    ContactForm2
  },

  computed: mapState({
    // eslint-disable-next-line arrow-parens
    contactInfo: (state) => state.contacts.contact
  })
}
</script>

<style scoped></style>
