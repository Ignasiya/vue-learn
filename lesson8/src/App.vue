<template>
  <header>
    <!-- <nav @click="clickMenu">
      <a href="#dashboard" class="menu__link">Dashboard</a>
      <a href="#about" class="menu__link">About</a>
      <a href="#notfound" class="menu__link">NotFound</a>
    </nav> -->
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/hello">Hello</router-link>
    </nav>
    <router-view />
  </header>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
}
</style>
