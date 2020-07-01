import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { login, password }) {
    try {
      const { data } = await axios.post('/api/login', { login, password })
      commit('SET_USER', data)
      this.$router.push('/')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error(error.response.data.message)
      }
      throw error
    }
  },

  async logout ({ commit }) {
    this.$router.push('/login')
    await axios.post('/api/logout')
    commit('SET_USER', null)

  }

}
