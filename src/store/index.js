import Vue from "vue";
import Vuex from "vuex";
import profile from "./modules/profile";
import createLogger from "vuex/dist/logger";
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const logger = createLogger({
  collapsed: false // auto-expand logged mutations
});

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => ({
    profile: state.profile,
  }),
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

const store = new Vuex.Store({
  /**
   * In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown.
   * !!!Do not enable strict mode when deploying for production!!!
   **/
  modules: {
    profile
  },
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    process.env.NODE_ENV !== "production" && logger,
    vuexLocalStorage.plugin,
  ]
});

export default store;
