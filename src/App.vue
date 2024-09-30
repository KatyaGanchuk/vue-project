<script setup>
import PageLayout from './components/PageLayout.vue';
import UserInfo from './components/UserInfo.vue';

const users = [
  { name: 'Oleksandr', age: 30 },
  { name: 'Victor', age: 25 },
  { name: 'Kateryna', age: 15 },
];
</script>

<template>
  <PageLayout>
    <template #header>
      User List
    </template>

    <template #default>
      <div v-for="(user, index) in users" :key="index">
        <UserInfo :name="user.name" :age="user.age" />
      </div>
    </template>

    <template #footer>
      User Information
    </template>
  </PageLayout>
</template>

<style scoped>
</style>
