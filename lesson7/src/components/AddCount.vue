<template>
  <div>
    <button @click="increment">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: 'AddCount',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    }
  },
  beforeCreate() {
    this.counter = 1
  },
  created() {
    this.counter = 2
  },
  beforeMount() {
    console.log('Before mount')
  },
  mounted() {
    console.log('Mounted')
  },
  updated() {
    console.log('Updated')
  }
}
</script>

<style scoped lang="scss"></style>
