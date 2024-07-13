<template>
  <NewComponent />
  <GaleryComp />
</template>

<script>
import NewComponent from './components/NewComponent.vue'
import GaleryComp from './components/GaleryComp.vue'

export default {
  name: 'App',
  components: {
    NewComponent,
    GaleryComp
  }
}
</script>

<style lang="scss"></style>
