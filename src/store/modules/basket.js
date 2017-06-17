import Vue from 'vue'

function createState () {
  return {}
}

export default {
  namespaced: true,

  state: createState,

  mutations: {
    ADD (state, payload) {
      payload.forEach(item => Vue.set(state, item.id, item))
    },

    REMOVE (state, payload) {
      payload.forEach(id => Vue.delete(state, id))
    },

    DESTROY (state) {
      state = createState()
    }
  }
}
