<template>
  <div class="main pt-1">
    <div>
      <h1 class="title">
        {{ $t('app.dts') }}
      </h1>
      <h2 class="subtitle">
        Contact
      </h2>
    </div>
    <AppNavSearching @filterResults="filter" />
  <!-- Loop through contacts here. look at 'search/engagement' for guidance -->
  </div>
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
