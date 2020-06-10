<template>
  <div
    class="w-1/2 sm:w-1/4 mx-6 px-5 py-3 mt-2 border-2 border-gray-500 rounded"
  >
    <h3 class="pb-2 font-semibold">
      {{ title }}
    </h3>
    <p class="content-text">
      {{ message }}
    </p>
    <AppButton class="start-button">
      Start
    </AppButton>
  </div>
</template>

<script>
export default {
  name: 'StartBoxes',
  props: {
    title: {
      default: 'Unknown',
      type: String
    },
    message: {
      default: 'Unknown',
      type: String
    }
  }
}
</script>

<style scoped>
.start-button {
  @apply bg-orange-500
  rounded
  py-2
  px-10
  text-white
  font-semibold;
}
.start-button:hover {
  @apply bg-orange-700;
}
</style>
