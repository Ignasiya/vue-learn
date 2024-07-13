<template>
  <div class="hello">
    <span>Hello world</span>
  </div>
</template>

<script>
export default {
  name: 'NewComponent',
  props: {
    message: {
      type: String,
      required: true,
      default() {
        return 'Default message'
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
