<template>
  <div class="user-card">
    <h3>{{ name }}</h3>
    <p>Age: {{ age }}</p>
    <p v-if="age < 18" class="not-allowed">Not Allowed</p>
  </div>
</template>

<script setup>
const { name, age } = defineProps({
  name: String,
  age: Number,
});
</script>

<style scoped>
.user-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.not-allowed {
  color: red;
  font-weight: bold;
}
</style>
