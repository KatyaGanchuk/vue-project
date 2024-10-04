<template>
    <div class="input-field">
        <label for="name">Name:</label>
        <input id="name" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String
    }
}
</script>

<style scoped>
.input-field {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}

input{
    border-radius: 20px;
    padding: 5px;
}
</style>