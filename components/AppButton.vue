<template>
  <button
    class="appButton"
    :class="custom_style"
    :data-cy="data_cypress"
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
    custom_style: { type: String, default: '' }
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
