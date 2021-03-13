export const state = () => ({
  app: {
    drawer: false,
    miniVariant: false,
    clipped: false,
    fixed: false
  }
})

export const getters = {
  app: s => s.app
}

export const mutations = {
  SET_APP (state, { payload, path }) {
    if (!path) {
      throw new Error('path is required')
    } else {
      state.app[path] = payload
    }
  }
}

export const actions = {}
