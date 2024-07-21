<template>
  <div class="user-list">
    <UserItem
      v-for="(item, index) in users"
      :key="index"
      :user="item"
      @updated-user="updatedUser"
    />
  </div>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
  name: 'UserList',
  data() {
    return {
      users: [
        {
          mail: 'user@example.com',
          name: 'John',
          surname: 'Doe',
          phone: '123-456-789',
          address: '123 Main St, New York, NY, 10001'
        },
        {
          mail: 'user2@example.com',
          name: 'Jane',
          surname: 'Smith',
          phone: '987-654-321',
          address: '456 Elm St, Los Angeles, CA, 90001'
        },
        {
          mail: 'user3@example.com',
          name: 'Alice',
          surname: 'Johnson',
          phone: '765-432-109',
          address: '789 Oak St, Chicago, IL, 60601'
        },
        {
          mail: 'user4@example.com',
          name: 'Bob',
          surname: 'Williams',
          phone: '321-654-987',
          address: '101 Maple St, San Francisco, CA, 94101'
        },
        {
          mail: 'user5@example.com',
          name: 'Charlie',
          surname: 'Brown',
          phone: '555-555-555',
          address: '202 Baker St, Seattle, WA, 98101'
        }
      ]
    }
  },
  components: {
    UserItem
  },
  methods: {
    updatedUser(user) {
      const findUser = this.users.find(item => item === user.user)
      if (findUser) {
        findUser.name = user.name
        findUser.surname = user.surname
      } else {
        alert('Пользователь не найден')
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
