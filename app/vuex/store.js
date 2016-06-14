import Vuex from 'vuex'
import Vue from 'vue'
import middlewares from './middlewares'
import * as types from './mutation-types'
import app from './modules/app'
import nav from './modules/nav'
import login from './modules/login'
import upload from './modules/upload'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = debug

const mutations = {
  [types.INIT_STATE] (state, moduleName) {
    state[moduleName] = { ...module.exports.default._modules[moduleName].state }
  },
  [types.CONTROL_LOADING](state, module, loadingProperty, flag) {
    state[module][loadingProperty] = flag
  }
}

export default new Vuex.Store({
  modules: {
    app,
    nav,
    login,
    upload
  },
  mutations,
  strict: debug,
  middlewares
})

// console.log(module.exports.default._modules)