<template>
  <div class="list">
    <input type="text" v-model.lazy.trim="category" placeholder="category" />
    <input type="number" v-model.lazy.number="value" placeholder="value" />
    <input type="date" v-model.lazy.trim="date" placeholder="date" />
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
export default {
  name: 'AddList',
  data() {
    return {
      category: '',
      value: '',
      date: ''
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${y}-${m}-${d}`
    }
  },
  methods: {
    onSave() {
      const data = {
        category: this.category,
        value: +this.value,
        date: this.date || this.getCurrentDate
      }
      this.$emit('onSave', data)
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
}
input {
  margin-bottom: 10px;
  padding: 5px;
}
</style>
