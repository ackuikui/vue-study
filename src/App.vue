<template>
  <div id="app-root">
    <login></login>
  </div>
</template>

<script>
import loginVue from './pages/login.vue'


export default {
  name: 'app',
  components: {
    'login': loginVue    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
