<template>
  <div class="mortgage-calc">
    <label>
      Loan Amount:
      <input type="number" v-model.number.lazy="loanAmount" />
    </label>
    <label>
      Interest Rate:
      <input type="number" step="0.01" v-model.number.lazy="interestRate" />
    </label>
    <label>
      Loan Term (in years):
      <input type="number" v-model.number.lazy="loanTerm" />
    </label>
  </div>
  <div class="mortgage-results">
    <h2>Monthly Payment: ${{ monthlyPayment }}</h2>
    <h2>Total Repayment: ${{ totalRepayment }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MortgageCalculator',
  data() {
    return {
      loanAmount: 1_000_000,
      interestRate: 10,
      loanTerm: 120
    }
  },
  computed: {
    monthlyPayment() {
      const monthlyInterestRate = this.interestRate / 100 / 12
      const term = this.loanTerm
      const principal = this.loanAmount
      const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, term)
      const denominator = Math.pow(1 + monthlyInterestRate, term) - 1
      return principal * (numerator / denominator).toFixed(2)
    },
    totalRepayment() {
      return (this.monthlyPayment * this.loanTerm).toFixed(2)
    }
  }
}
</script>

<style scoped lang="scss"></style>
