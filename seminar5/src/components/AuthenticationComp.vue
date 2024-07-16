<template>
  <form v-if="!isAuthenticated" class="authentication">
    <label>Login <input type="text" v-model.lazy="login" /></label>
    <label>Password <input type="password" v-model.lazy="password" /></label>
    <button type="submit" @click.prevent="formCheck">Зайти</button>
    <div class="error" v-if="error">{{ error }}</div>
  </form>
  <div v-else>
    <h3>Авторизация успешна</h3>
  </div>
</template>

<script>
export default {
  name: 'AuthenticationComp',
  data() {
    return {
      isAuthenticated: false,
      login: '',
      password: '',
      error: ''
    }
  },
  methods: {
    formCheck() {
      if (this.login === 'admin' && this.password === 'password') {
        this.isAuthenticated = true
        this.error = ''
      } else {
        this.error = 'Invalid login or password'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.authentication {
  max-width: 262px;
  label {
    display: flex;
    column-gap: 10px;
    margin-bottom: 10px;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  input:focus {
    border-color: #333;
  }

  button {
    margin-top: 15px;
    padding: 5px 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover {
    background-color: #666;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .error {
    color: red;
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
  }
}
</style>
