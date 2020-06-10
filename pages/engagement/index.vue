<template>
  <div>
    <nuxt-link to="engagement/create">
      <AppButton btntype="button" class="buttons">
        Create an Engagament
      </AppButton>
    </nuxt-link>
    <nuxt-link to="engagement/list">
      <AppButton btntype="button" class="buttons">
        Search Contact or Engagement
      </AppButton>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.buttons {
  @apply bg-orange-500 
          rounded 
          border-2 
          border-orange-500  
          py-2 
          px-10 
          text-white 
          font-semibold;
}
.buttons:hover {
  @apply border-orange-700 bg-orange-700;
}
</style>
