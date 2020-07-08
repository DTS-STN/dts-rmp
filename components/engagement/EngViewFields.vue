<template>
  <div>
    <p class="Label">
      {{ $t('engagement.' + label) }}
      :&nbsp;
      <span class="text-black">
        <slot>
          default text
        </slot>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'EngViewFields',
  props: {
    label: { type: String, required: true, default: '' }
  }
}
</script>

<style scoped>
.Label {
  @apply font-bold text-rmp-orange text-xl;
}

</style>
