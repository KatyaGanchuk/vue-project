<template>
  <div class="container-form">
    <h1>Form</h1>

    <div>
      <NameInput v-model="name" />
      <p v-if="errors.name" class="error">{{ errors.name }}</p>

      <AgeInput v-model="age" />
      <p v-if="errors.age" class="error">{{ errors.age }}</p>

      <ImageUrlInput v-model="imageUrl" />
      <p v-if="errors.imageUrl" class="error">{{ errors.imageUrl }}</p>
      <div class="button-container">
        <button @click="handleShowProfile">Show Profile</button>
      </div>
    </div>

    <ProfileCard v-if="showProfile" :name="name" :age="age" :imageUrl="imageUrl">
      <p>This is slot!</p>
    </ProfileCard>
  </div>
</template>

<script>
import ProfileCard from './components/ProfileCard.vue'
import NameInput from './components/NameInput.vue'
import AgeInput from './components/AgeInput.vue'
import ImageUrlInput from './components/ImageUrlInput.vue'

export default {
  components: {
    ProfileCard,
    NameInput,
    AgeInput,
    ImageUrlInput
  },
  data() {
    return {
      name: '',
      age: null,
      imageUrl: '',
      showProfile: false,
      errors: {   // Об'єкт для зберігання помилок в кожному полі
        name: '',
        age: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    validateFields() {
      let valid = true;
      this.errors = { name: '', age: '', imageUrl: '' }; // Очищуємо попередні помилки

      if (!this.name) {
        this.errors.name = 'Name is required';
        valid = false;
      }
      if (!this.age) {
        this.errors.age = 'Age is required';
        valid = false;
      } else if (isNaN(this.age) || this.age <= 0) {
        this.errors.age = 'Please enter a valid age';
        valid = false;
      }
      if (!this.imageUrl) {
        this.errors.imageUrl = 'Image URL is required';
        valid = false;
      }

      return valid;
    },
    handleShowProfile() {
      // Перевіряємо кожне поле через функцію validateFields
      if (this.validateFields()) {
        this.showProfile = true;
      } else {
        this.showProfile = false;
      }
    }
  }
}
</script>

<style>
.container-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error {
  color: red;
  font-weight: bold;
  font-size: 12px;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
