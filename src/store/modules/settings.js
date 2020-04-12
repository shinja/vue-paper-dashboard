import { getField, updateField } from 'vuex-map-fields'
import VuexPersist from 'vuex-persist'
import localforage from 'localforage'

const initialState = () => {
  return {
    lang: null
  }
}
export const state = initialState()

export const mutations = {
  updateField
}

export const getters = {
  getField
}

const presist = new VuexPersist({
  key: 'settings',
  storage: localforage.createInstance({
    name: 'vuex',
    driver: localforage.LOCALSTORAGE
  }),
  asyncStorage: true,
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => ({
    settings: state.settings
  })
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  plugin: presist.plugin
}
