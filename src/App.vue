<script setup>

</script>

<template>
    <router-view :key="Math.random()" />
</template>

<style lang="scss">
@import "./assets/styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
