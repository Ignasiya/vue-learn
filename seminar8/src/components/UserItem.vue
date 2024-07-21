<template>
  <div class="user-item">
    <label>
      Name:
      <input type="text" v-model.lazy.trim="name" />
    </label>
    <label>
      Surname:
      <input type="text" v-model.lazy.trim="surname" />
    </label>
    <button type="submit" @click.prevent="onUpdated">Save</button>
    <div>E-mail: {{ user.mail }}</div>
    <button @click="toggleInfo = !toggleInfo">more...</button>
    <div v-if="toggleInfo">
      <div>Phone: {{ user.phone }}</div>
      <div>Address: {{ user.address }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  data() {
    return {
      toggleInfo: false,
      name: '',
      surname: ''
    }
  },
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  created() {
    this.name = this.user.name
    this.surname = this.user.surname
  },
  methods: {
    onUpdated() {
      this.$emit('updated-user', { user: this.user, name: this.name, surname: this.surname })
    }
  }
}
</script>

<style scoped lang="scss"></style>
