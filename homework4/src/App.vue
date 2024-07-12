<template>
  <BasicLayout>
    <template #main-content> Привет </template>
  </BasicLayout>
</template>

<script>
import BasicLayout from './layouts/BasicLayout.vue'

export default {
  name: 'App',
  components: {
    BasicLayout
  }
}
</script>

<style lang="scss"></style>
