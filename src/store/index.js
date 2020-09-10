import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: [],
    details: [],
    currentDetail: 0,
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
    },
    currentDetail(state) {
      return state.currentDetail
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
    },
    SET_CURRENT_DETAIL(state, data) {
      state.currentDetail = data
    }
  },

  actions: {
    fetchData({ commit }, data) {
      commit('SET_ALL_DETAILS', data.data);
      commit("SET_TOTAL_DATA", data.data.length)
      commit("SET_ALL_USERS", this.state.details.slice(0,9))
    },
    fetchDetails({ commit }) {
      commit("SET_ALL_USERS", this.state.details)
    },
    fetchUser({ commit }, pageNumber) {
          let start = pageNumber.id*9;
          let end = start+9;
          commit("SET_ALL_USERS", this.state.details.slice(start, end))
    },
    fetchCurrentDetail({ commit }, id) {
      commit("SET_CURRENT_DETAIL", this.state.details.find(element => {
        return element.id === id;
      }))
    },
    deleteInfo({commit}, id) {
      let newData = this.state.userDetails.filter(element => {
        return element.id !== id.id;
      })
      commit("SET_ALL_USERS", newData)
    }
  },
  modules: {
  }
})
