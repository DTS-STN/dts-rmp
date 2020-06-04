<template>
  <div>
    <nuxt-link to="engagement/create">
      <AppButton
        btntype="button"
        class="buttons hover:border-orange-700 hover:bg-orange-700 "
      >
        Create an Engagament
      </AppButton>
    </nuxt-link>
    <nuxt-link to="engagement/list">
      <AppButton
        btntype="button"
        class="buttons hover:border-orange-700 hover:bg-orange-700 "
      >
        Search Contact or Engagement
      </AppButton>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style>
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
</style>
