<script>
export default {
  data() {
    return {
      titulo: 'Hello World', // Defina o título inicial aqui
    };
  },
};
</script>

<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    <input type="text" v-model="titulo">
  </div>
</template>

<style scoped>
input {
  padding: 6px 8px;
}
</style>
