<template>
  <div>
    <div v-for="(item, index) in payments" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    payments: {
      type: Array,
      required: true,
      default: () => []
    },
    info: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss"></style>
