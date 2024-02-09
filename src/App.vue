<template>
  <header>
    <NavigationBar/>
  </header>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #2b2e31;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #d9d9d9;
}
</style>
