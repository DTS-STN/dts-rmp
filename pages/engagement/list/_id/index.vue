<template>
  <div class="px-3">
    <nuxt-link to="/engagement/list">
      <AppButton btntype="button" class="back-button hover:bg-blue-200">
        Back
      </AppButton>
    </nuxt-link>
    <hr />
    <span> ID: {{ $route.params.id }}</span>
    <!-- On this page we can make an API call with the id using the 'await created()' function
         OR simply pass the engagement as a prop object. -->
    <ShareButtons />
  </div>
</template>
<script>
export default {
  data() {
    return {
      engagement: {}
    }
  },
  head() {
    return {
      title: 'Display a engagement by id',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Display a engagement!'
        }
      ]
    }
  }
}
</script>
<style scoped>
.back-button {
  @apply bg-white
    border-2
    border-blue-800
    rounded
    py-2
    px-10
    text-blue-800
    font-semibold mr-3;
}
</style>
