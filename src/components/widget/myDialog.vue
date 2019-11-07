<template>
  <div>
    <div class="dialog-header">
      <slot name="header"></slot>
    </div>
    <div class="dialog-content">
      <slot name="content"></slot>
    </div>
    <div class="dialog-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
};
</script>

<style>
</style>