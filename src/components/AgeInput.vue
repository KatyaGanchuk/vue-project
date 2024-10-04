<template>
    <div class="input-field">
        <label for="age">Age:</label>
        <input id="age" :value="modelValue" @input="$emit('update:modelValue', $event.target.valueAsNumber)"
            type="number" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: Number
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