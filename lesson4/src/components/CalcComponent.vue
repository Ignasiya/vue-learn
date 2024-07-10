<template>
  <div class="hello">
    <div class="calc">
        <input class="input" type="text" v-model="inputValue">
        <button @click="addButton(num)" v-for="num in nums" :key="num.id">{{ num }}</button>
        <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id">{{ tab }}</button>
        <button @click="resultCalc">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComponent',
  data () {
    return {
      inputValue: 0,
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      tabs: ['-', '+', '*', '/']
    }
  },
  methods: {
    addButton (num) {
      this.inputValue = this.inputValue.toString()
      this.inputValue += num
    },
    resultCalc () {
      try {
        const parts = this.inputValue.split(/([+\-*/])/)
        this.inputValue = parts.reduce((acc, part, index) => {
          if (index % 2 === 0) {
            return acc + Number(part)
          } else {
            switch (part) {
              case '+':
                return acc + Number(parts[index + 1])
              case '-':
                return acc - Number(parts[index + 1])
              case '*':
                return acc * Number(parts[index + 1])
              case '/':
                return acc / Number(parts[index + 1])
              default:
                return acc
            }
          }
        }, 0)
      } catch (error) {
        console.error('Error in calculation:', error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calc {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 48px;
}
.input {
    grid-column: 1 / -1;
    text-align: right;
}
</style>
