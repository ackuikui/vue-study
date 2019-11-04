<template>
  <div>
    <input type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
    <div class="error-msg">{{reversedMessage}}</div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      inputValue: this.value
    };
  },
  computed: {
    reversedMessage: function() {
      return this.value;
    }
  }
};
</script>

<style>
</style>