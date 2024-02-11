<template>
  <NavigationBar name="John Doe"/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
export default {
  name: "App",
  components: {
    NavigationBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #F5F7F8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #45474B;
}

main {
  margin: 8rem 4rem;
}

.vue-link {
  text-decoration: none;
  color: #d9d9d9;
}
</style>
