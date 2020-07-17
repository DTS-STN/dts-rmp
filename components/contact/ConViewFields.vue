<template>
  <div>
    <p class="Label">
      {{ $t('contact.' + label) }}
      :&nbsp;
      <span class="text-black font-medium">
        <slot>
          default text
        </slot>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ConViewFields',
  props: {
    label: { type: String, required: true, default: '' }
  }
}
</script>

<style scoped>
.Label {
  @apply font-semibold text-rmp-orange text-xl;
}
@media screen and (max-width: 768px) {
  .Label { font-size: 16px !important; }
}
</style>
