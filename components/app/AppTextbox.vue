<template>
  <div>
    <input
      class="textbox"
      :type="texttype"
      :placeholder="placeholder"
      :class="classes"
    />
  </div>
</template>

<script>
export default {
  name: 'AppTextBox',
  props: {
    texttype: {
      default: 'text',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    },
    classes: {
      default: '',
      type: String
    }
  }
}
</script>

<style>
.textbox {
  @apply border border-blue-400 rounded p-1;
}
.textbox:hover {
  @apply border-blue-800;
}
</style>
