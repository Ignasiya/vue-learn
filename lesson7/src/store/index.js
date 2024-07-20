import { createApp } from 'vue'
import Vuex from 'vuex'

const app = createApp({})
app.use(Vuex)

export default new Vuex.Store({
  state: {
    payments: []
  },
  mutations: {
    SET_PAYMENT(state, payment) {
      state.payments = payment
    },
    ADD_PAYMENT(state, payment) {
      state.payments.push(payment)
    }
  },
  getters: {
    getPayments: state => state.payments,
    getFullPayment: state => {
      return state.payments.reduce((acc, payment) => acc + payment.value, 0)
    }
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentsData = [
          { date: '28-03-2023', category: 'Food', value: 169 },
          { date: '29-03-2023', category: 'Transportation', value: 120 },
          { date: '30-03-2023', category: 'Healthcare', value: 90 },
          { date: '31-03-2023', category: 'Education', value: 130 }
        ]
        commit('SET_PAYMENT', paymentsData)
      }, 1000)
    }
  }
})
