import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/plugins/vuex'

Vue.use(VueRouter)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

/**
 * https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
 */
const waitForStorageToBeReady = async (to, from, next) => {
  /**
   * if applying localforage in vuex-presist in different ways(LOCALSTORAGE & INDEXEDDB)
   * this promise would be resolved while the first vuex synced.
   */
  await store.restored
  next()
}
router.beforeEach(waitForStorageToBeReady)

export default router
