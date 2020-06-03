<template>
  <div>
    <input
      :type="texttype"
      :placeholder="placeholder"
      :class="classes"
      class="border border-blue-400 hover:border-blue-800 rounded p-1"
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

<style></style>
