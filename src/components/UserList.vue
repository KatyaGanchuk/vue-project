<template>
    <div>
      <h1>Список користувачів</h1>
      <input v-model="filterUserId" @input="fetchUsers" placeholder="Фільтр за userId" />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="error" class="error">{{ error }}</div>
      
      <h2>Додати нового користувача</h2>
      <form @submit.prevent="addUser">
        <input v-model="newUser.name" placeholder="Name" required />
        <input v-model="newUser.email" type="email" placeholder="Email" required />
        <input v-model="newUser.phone" placeholder="Phone" required />
        <button type="submit">Додати користувача</button>
      </form>
      <div v-if="createMessage" class="success">{{ createMessage }}</div>
    </div>
  </template>
  
  <script>
  import axios from '../axiosConfig';
  
  export default {
    data() {
      return {
        users: [],
        error: null,
        newUser: {
          name: '',
          email: '',
          phone: '',
        },
        createMessage: '',
        filterUserId: '',
      };
    },
    methods: {
      async fetchUsers() {
        this.error = null;
        try {
          const response = await axios.get(`/users`, {
            params: { userId: this.filterUserId },
          });
          this.users = response.data;
        } catch (error) {
          this.error = 'Не вдалося отримати користувачів';
        }
      },
      async addUser() {
        this.createMessage = '';
        this.error = null;
        try {
          const response = await axios.post('/users', this.newUser);
          this.createMessage = `Користувача створено: ${response.data.name}`;
          this.newUser = { name: '', email: '', phone: '' };
        } catch (error) {
          this.error = 'Не вдалося створити користувача';
        }
      },
    },
    watch: {
      filterUserId: 'fetchUsers',
    },
    created() {
      this.fetchUsers();
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  .success {
    color: green;
  }
  </style>
  