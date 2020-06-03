<template>
  <!-- eslint-disable vue/prop-name-casing -->
  <button
    :class="custom_style"
    :data-cy="data_cypress"
    :type="btntype"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'AppButton',
  props: {
    data_cypress: { type: String, default: 'button-cy' },
    custom_style: { type: String, default: '' },
    btntype: { type: String, default: 'submit' }
  }
}
</script>

<style scoped>
.appButton {
  @apply shadow bg-teal-800 text-white font-bold mt-12 py-2 px-4 rounded;
}
.appButton:hover {
  @apply bg-teal-600;
}
.appButton:focus {
  @apply shadow-outline;
}
</style>
