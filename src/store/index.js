import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const context = require.context('./modules', true, /\.js$/)

const modules = context.keys().reduce((modules, modulePath) => {
  // debugger
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = context(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
})

export default store
