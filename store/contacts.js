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
