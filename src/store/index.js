import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userDetails: [],
    details: [],
    totalData: 0
  },

  getters: {
    user(state) {
      return state.userDetails;
    },
    details(state) {
      return state.details;
    },
    pagination(state) {
      return state.pagination
    },
    totalData(state) {
      return state.totalData
    }
  },

  mutations: {
    SET_ALL_USERS(state, data) {
      state.userDetails = data;
    },
    SET_ALL_DETAILS(state, data) {
      state.details = data;
    },
    SET_TOTAL_DATA(state, data) {
      state.totalData = data
    }
  },

  actions: {
    fetchDetails({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/photos').then(users => {
        commit("SET_TOTAL_DATA", users.data.length)
        commit("SET_ALL_DETAILS", users.data)
        commit("SET_ALL_USERS", this.state.details.slice(0, 9))

      })
    },
    fetchUser({ commit },pageNumber) {
          let start = pageNumber.id*9;
          let end = start+9;
          console.log(this.state.details)
          commit("SET_ALL_USERS", this.state.details.slice(start, end))
    },
  },
  modules: {
  }
})
