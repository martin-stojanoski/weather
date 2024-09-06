<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #181818;
}

input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #181818;
  font-size: 1rem;
}

body {
  background-color: #f0f0f0;
}
</style>

<script>
  export default {
    mounted() {
      document.title = 'Weather App'
    }
  }
</script>
