<template>
  <div>
    <nuxt-link to="engagement/create">
      <AppButton
        btntype="button"
        custom_style="
          bg-orange-500 
          hover:bg-orange-700 
          rounded 
          border-2 
          border-orange-500 
          hover:border-orange-700 
          py-2 
          px-10 
          text-white 
          font-semibold"
      >
        Create an Engagament
      </AppButton>
    </nuxt-link>
    <nuxt-link to="engagement/list">
      <AppButton
        btntype="button"
        custom_style="
          bg-orange-500 
          hover:bg-orange-700 
          rounded 
          border-2 
          border-orange-500 
          hover:border-orange-700 
          py-2 
          px-10 
          text-white 
          font-semibold"
      >
        List or search Engagement
      </AppButton>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
