<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "my-input",
  props: ["value", "placeholder"],
  data() {
    return {
      inputValue: this.value
    };
  },
  computed: {

  }
};
</script>

<style>
</style>