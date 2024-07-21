import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    cart: [],
    data: []
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--
      }
    },
    ADD_ITEM_TO_CART(state, item) {
      state.cart.push(item)
    },
    FETCH_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    addItemToCart({ commit }, item) {
      commit('ADD_ITEM_TO_CART', item)
    },
    fetchData({ commit }) {
      setTimeout(() => {
        const data = ['Data1', 'Data2', 'Data3', 'Data4', 'Data5', 'Data6']
        commit('FETCH_DATA', data)
      }, 3000)
    }
  },
  getters: {
    cartItems: state => state.cart,
    totalItems: state => state.cart.length,
    totalPrice: state => state.cart.reduce((acc, item) => acc + item.price, 0)
  },
  modules: {}
})
