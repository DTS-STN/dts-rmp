<template>
  <div class="container">
    <div class="tags">
      <slot />
    </div>
    <div class="delete">
      <button class="delete-btn">
        x
      </button>
    </div>
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
    .container {
        @apply flex items-center text-white bg-rmp-lt-blue text-rmp-dk-blue p-3 pl-5 pr-5 rounded-full items-center
    }
    .delete-btn {
        @apply text-rmp-dk-blue bg-white rounded-full items-center justify-center pl-2 pr-2 ml-2
    }
</style>
