<template>
  <button :type="btntype">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'AppTextBox',
  props: {
    text: {
      default: 'Submit',
      type: String
    },
    btntype: {
      default: 'submit',
      type: String
    }
  }
}
</script>

<style></style>
