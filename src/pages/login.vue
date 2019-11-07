<template>
  <div>
    <my-input v-model="account"></my-input>
    <my-input v-model="password"></my-input>
    <!-- <myInput></myInput> -->
    <component :is="dialogType"></component>
  </div>
</template>

<script>
import alertVue from "./alert.vue";

export default {
  name: "login",
  data() {
    return {
      account: "123",
      password: "45",
      dialogType: "my-alert"
    };
  },
  components: {
    "my-alert":alertVue
  }
};
</script>

<style>
</style>
