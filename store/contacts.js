export const state = () => ({
  contacts: [],
  contact: []
})

export const mutations = {
  SET_CONTACTS(state, contacts) {
    state.contacts = contacts
  },
  SET_CONTACT(state, contact) {
    state.contact = contact
  }
}

export const actions = {
  fetchContacts({ commit }) {
    // eslint-disable-next-line no-console
    console.log('client side baseURL: ' + this.$axios.defaults.baseURL)
    // eslint-disable-next-line no-console
    console.log('env variable baseURL: ' + process.env.baseURL)
    return this.$axios.get('/api/contact/contacts')
      .then((response) => {
        commit('SET_CONTACTS', response.data)
      })
  },

  fetchContact({ commit }, id) {
    return this.$axios.get('/api/contact/contact?id=' + id)
      .then((response) => {
        commit('SET_CONTACT', response.data)
      })
  }
}
