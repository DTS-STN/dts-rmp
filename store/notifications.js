export const state = () => ({
  notification: []
})

export const mutations = {
  SET_NOTIFICATION(state, notification) {
    state.notification = notification
  },
  DELETE_NOTIFICATION(state) {
    state.notification = []
  }
}

export const actions = {
  addNotification({ commit, dispatch }, message) {
    commit('SET_NOTIFICATION', message)
    setTimeout(() => dispatch('removeNotification'), 5000)
  },
  removeNotification({ commit }) {
    commit('DELETE_NOTIFICATION')
  }
}
