<script setup>
defineSlots();
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
header,
footer {
  padding: 10px;
  background-color: #6c98ff;
  margin-bottom: 10px;
}

main {
  padding: 10px;
}
</style>
