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
  addNotification({ commit }, message) {
    commit('SET_NOTIFICATION', message)
  },
  removeNotification({ commit }) {
    commit('DELETE_NOTIFICATION')
  }
}
