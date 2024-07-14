<template>
  <div>
    <input type="text" v-model="operand1" />
    <input type="text" v-model="operand2" />
    {{ result }}
    <div>
      <button v-for="operator in operators" :key="operator.id" @click="calculate(operator)">
        {{ operator }}
      </button>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div>
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-if="result >= 0 && result <= 100">Получилось число от 0 до 100</template>
      <template v-if="result > 100">Получилось число больше 100</template>
    </div>
    <div>
      <h3>Число Фиббоначи</h3>
      <p>{{ fibonacci1 }}</p>
      <p>{{ fibonacci2 }}</p>
    </div>
    <div>
      <h3>История операций</h3>
      <div v-for="(log, index) in logs" :key="index">{{ log }}</div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'CalcFunc',
  data() {
    return {
      operators: ['+', '-', '*', '/'],
      operand1: 0,
      operand2: 0,
      result: 0,
      error: '',
      logs: reactive({})
    }
  },
  methods: {
    add() {
      this.result = +this.operand1 + +this.operand2
    },
    subtract() {
      this.result = +this.operand1 - +this.operand2
    },
    multiply() {
      this.result = +this.operand1 * +this.operand2
    },
    divide() {
      const { operand1, operand2 } = this
      if (operand2 === 0) {
        this.error = 'Ошибка, на ноль делить нельзя'
      } else {
        this.result = operand1 / operand2
      }
    },
    calculate(operator = '+') {
      this.error = ''
      switch (operator) {
        case '+':
          this.add()
          break
        case '-':
          this.subtract()
          break
        case '*':
          this.multiply()
          break
        case '/':
          this.divide()
          break
      }
      const key = Date.now()
      const value = `Результат операции: ${this.operand1} ${operator} ${this.operand2} = ${this.result}`
      this.logs[key] = value
    },
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
    }
  },
  computed: {
    fibonacci1() {
      return this.fib(this.operand1)
    },
    fibonacci2() {
      return this.fib(this.operand2)
    }
  }
}
</script>

<style lang="scss" scoped></style>
