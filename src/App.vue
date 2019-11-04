<template>
  <div id="app-root">
    <my-input v-model="account"></my-input>
    <my-input v-model="password"></my-input>
    {{'parent '+account}}
    {{'parent '+password}}
  </div>
</template>

<script>
import myInputVue from './components/my-input.vue'

export default {
  name: 'app',
  components: {
    'my-input': myInputVue    
  },
  data() {
    return {
      account: '234',
      password: '23442'
    }
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
