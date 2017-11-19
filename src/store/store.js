import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { // 상태값
    counter: 0,
    item: [],
    searchWords: [
      {
        word: '투도스'
      },
      {
        word: '나나'
      },
      {
        word: '웃경'
      }
    ],
    searchHistory: []
  },
  getters: { // 계산된 상태값
    getCount (state) {
      return state.counter
    },
    getItem (state) {
      return state.item
    },
    getSearchWord (state) {
      return state.searchWords
    }
  },
  mutations: { // 계산하는 함수
    addCounter (state, payload) {
      state.counter = state.counter + payload.value
      return state.counter
    },
    addItem (state) {
      state.item.push(state.counter)
      return state.item
    }
  }
})
