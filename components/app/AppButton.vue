<template>
  <button
    class="appButton"
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
    // eslint-disable-next-line vue/prop-name-casing
    data_cypress: { type: String, default: 'button-cy' },
    // eslint-disable-next-line vue/prop-name-casing
    custom_style: { type: String, default: '' },
    // eslint-disable-next-line vue/prop-name-casing
    btntype: { type: String, default: 'submit' }
  }
}
</script>

<style scoped>
.appButton {
  background-color: #d87c4f;
  @apply shadow text-white font-bold mt-12 py-2 px-6 rounded;
}
.appButton:hover {
  background-color: #b64f1c;
}
.appButton:focus {
  @apply shadow-outline;
}
</style>
