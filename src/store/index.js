import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { api } from '../services/api'

export default new Vuex.Store({
  state: {
    tasks: [],
    
    menuStatus: false,
  },
  getters: {
    tasks: state => state.tasks,
    menuStatus: state => state.menuStatus
  },
  mutations: {
    setTasks: (state, payload) => state.tasks = payload,

    changeMenuStatus: (state, payload) => state.menuStatus = payload
  },
  actions: {
    async requestTasks ({ commit }) {
      const response = await api.get('/tasks')
        .then(res => res)

      if (response.status === 200) {
        commit('setTasks', response.data)
      } else {
        alert('Ocorreu um problema na requisição')
      }
    },

    async newTaskRequest (_, payload) {
      await api.post('/tasks', payload)
        .then(res => res)
    }
  },
})
