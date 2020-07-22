export const state = () => ({
  engagements: [],
  engagement: [],
  comments: []
})

export const mutations = {
  SET_ENGAGEMENTS(state, engagements) {
    state.engagements = engagements
  },
  SET_ENGAGEMENT(state, engagement) {
    state.engagement = engagement
  },
  ADD_COMMENT(state, comment) {
    state.engagement.comments.unshift(comment)
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
  },

  addComment({ commit }, comment) {
    // eslint-disable-next-line no-console
    console.log(comment)
    commit('ADD_COMMENT', comment)
  }
}
