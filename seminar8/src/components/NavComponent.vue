<template>
  <nav>
    <router-link v-for="(link, index) in links" :key="index" :to="link.path">{{
      link.title
    }}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavComponent',
  data() {
    return {
      links: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Counter', path: '/counter' },
        { title: 'User', path: '/users' },
        { title: 'Paginate', path: '/paginate' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding: 30px;
  display: flex;
  gap: 32px;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
