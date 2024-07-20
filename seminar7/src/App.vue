<template>
  <CounterComp />
</template>

<script>
import CounterComp from './components/CounterComp.vue'

export default {
  name: 'App',
  components: {
    CounterComp
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
