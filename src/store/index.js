import Vue from "vue";
import Vuex from "vuex";
import profile from "./modules/profile";
import settings from "./modules/settings";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const logger = createLogger({
  collapsed: false // auto-expand logged mutations
});

const store = new Vuex.Store({
  /**
   * In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown.
   * !!!Do not enable strict mode when deploying for production!!!
   **/
  modules: {
    profile,
    settings,
  },
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    process.env.NODE_ENV !== "production" && logger,
    profile.plugin,
    settings.plugin
  ]
});

export default store;
