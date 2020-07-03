<template>
  <AppNavSearching @filterResults="filter" />
  <!-- Loop through contacts here. look at 'search/engagement' for guidance -->
</template>

<script>
export default {
  data() {
    return {
      contacts: [
      ],
      filteredContacts: [
      ]
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const res = await this.$axios.get('/api/contact/contacts', config)
      this.contacts = res.data
      this.filteredContacts = res.data
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },
  methods: {
    filter(input) {
      const searchtext = input.toLowerCase()
      // for now it only filters on email
      const results = this.contacts.filter(contact =>
        contact.email.toLowerCase().includes(searchtext)
      )
      this.filteredContacts = results
    }
  }
}
</script>

<style>

</style>
