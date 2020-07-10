export const state = () => ({
  engagements: [],
  engagement: []
})

export const mutations = {
  SET_ENGAGEMENTS(state, engagements) {
    state.engagements = engagements
  },
  SET_ENGAGEMENT(state, engagement) {
    state.engagement = engagement
  }
}

export const actions = {
  fetchEngagements({ commit }) {
    this.$axios.defaults.baseURL = this.$config.API_URL
    return this.$axios.get('/api/engagement/engagements')
      .then((response) => {
        commit('SET_ENGAGEMENTS', response.data)
      })
  },

  fetchEngagement({ commit }, id) {
    this.$axios.defaults.baseURL = this.$config.API_URL
    return this.$axios.get(`/api/engagement/engagement?id=${id}`)
      .then((response) => {
        commit('SET_ENGAGEMENT', response.data)
      })
  }
}
