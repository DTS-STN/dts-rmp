<template>
  <div class="tags mr-2">
    <slot />
    <button class="delete-btn">
      x
    </button>
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
        @apply flex text-white bg-rmp-lt-blue text-rmp-dk-blue rounded-full py-2 px-4 items-center
    }
    .delete-btn {
        @apply text-rmp-dk-blue bg-white rounded-full items-center justify-center pl-2 pr-2 ml-2
    }
</style>
