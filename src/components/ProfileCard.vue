<template>
    <div class="profile-card">
        <img :src="imageUrl" alt="Profile Image" v-if="imageUrl" class="profile-image" />
        <h2>{{ name || "No Name" }}</h2>
        <p v-if="age">Age: {{ age }}</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        age: Number,
        imageUrl: String
    }
}
</script>

<style scoped>
.profile-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 300px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
}
</style>