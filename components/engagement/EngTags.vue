<template>
  <div
    class="tags mr-2"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
    .tags {
        @apply flex bg-rmp-lt-blue text-rmp-dk-blue rounded-full my-2 py-2 px-4 items-center
    }
</style>
