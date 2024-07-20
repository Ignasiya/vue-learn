<template>
  <PaymentsDisplay :payments="payments" :info="infoText" />
  <AddList @onSave="addNewPay" />
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddList from './components/AddList.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddList
  },
  data() {
    return {
      payments: []
    }
  },
  methods: {
    // fetchData() {
    //   return [
    //     { date: '28-03-2023', category: 'Food', value: 169 },
    //     { date: '29-03-2023', category: 'Transportation', value: 120 },
    //     { date: '30-03-2023', category: 'Healthcare', value: 90 },
    //     { date: '31-03-2023', category: 'Education', value: 130 }
    //   ]
    // },
    addNewPay(newPay) {
      // this.payments.push(newPay)
      this.ADD_PAYMENT(newPay)
    },
    ...mapMutations(['SET_PAYMENTS', 'ADD_PAYMENT'])
  },
  created() {
    // this.payments = this.fetchData()
    this.SET_PAYMENTS(this.fetchData())
  },
  computed: {
    ...mapState(['payments']),
    ...mapGetters(['getPayments', 'getFullPayment']),
    ...mapActions(['fetchData'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
