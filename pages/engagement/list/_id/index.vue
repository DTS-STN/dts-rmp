<template>
  <div>
    <nuxt-link to="/engagement/list">
      <AppButton
        btntype="button"
        custom_style="
          bg-white 
          hover:bg-blue-200 
          border-2 
          border-blue-800 
          rounded 
          py-2 
          px-10 
          text-blue-800 
          font-semibold mr-3"
      >
        Back
      </AppButton>
    </nuxt-link>
    <hr />
    <span> ID: {{ $route.params.id }}</span>
    <!-- On this page we can make an API call with the id using the 'await created()' function
         OR simply pass the engagement as a prop object. -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      joke: {}
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
