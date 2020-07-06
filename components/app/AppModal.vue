<template>
  <div
    class="fixed inset-0 w-full h-screen flex items-center justify-center bg-opacity-75 bg-gray-700"
  >
    <div class="relative w-3/4 h-3/4 bg-white rounded">
      <button
        aria-label="close"
        class="absolute top-0 right-0 text-xl text-gray-500 my-2 mx-4"
        @click.prevent="close"
      >
        ×
      </button>
      <div class="mt-8 p-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
