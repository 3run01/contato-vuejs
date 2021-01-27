import Vue from 'vue'
import Vuex from 'vuex'
import Contato from './modules/contato'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overlay: false,
    alert: {
      typeAlert: '',
      status: false,
      errors: []
    },
  },
  mutations: {
    setOverlay(state, status){
      state.overlay = status
    },
    alertError(state, errors){
      state.alert.typeAlert = 'danger'
      state.alert.status = true
      state.alert.errors = errors
      setTimeout(() => {
        state.alert.status = false
      }, 15000)
    },
    alertSuccess(state, messages){
      state.alert.typeAlert = 'success'
      state.alert.status = true
      state.alert.errors = messages
    },
  },
  actions: {
  },
  getters: {
    getOverlay: state => state.overlay,
    getAlert: state => state.alert,
  },
  modules: {
    Contato: {
      state: {...Contato.state},
      getters: {...Contato.getters},
      mutations: {...Contato.mutations},
      actions: {...Contato.actions},
    }, 
  },
})
