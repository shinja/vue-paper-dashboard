import { getField, updateField } from 'vuex-map-fields'
import VuexPersist from 'vuex-persist'
import localforage from 'localforage'

const initialState = () => {
  return {
    account: null,
    exp: null,
    iat: null,
    token: null
  }
}
export const state = initialState()

export const actions = {
  reset({ commit }) {
    commit('reset')
  }
}

export const mutations = {
  updateField,

  reset(state) {
    Object.assign(state, initialState())
  }
}

export const getters = {
  getField
}

const presist = new VuexPersist({
  key: 'profile',
  storage: localforage.createInstance({
    name: 'vuex',
    driver: localforage.INDEXEDDB
  }),
  asyncStorage: true,
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => ({
    profile: state.profile
  })
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
  plugin: presist.plugin
}
