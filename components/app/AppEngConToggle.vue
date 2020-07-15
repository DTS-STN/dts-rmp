<template>
  <div class="inline-flex pt-6">
    <nuxt-link
      class="left"
      :class="this.$route.path.includes('engagement') ? 'btnSelected' : 'btnDefault'"
      :to="localePath(`/${ search?'search':'add' }/engagement`)"
    >
      Engagement
    </nuxt-link>
    <nuxt-link
      class="right"
      :class="this.$route.path.includes('contact') ? 'btnSelected' : 'btnDefault'"
      :to="localePath(`/${ search?'search':'add' }/contact`)"
    >
      Contact
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AppEngConToggle',
  props: {
    search: { type: Boolean, default: true }
  }
}
</script>

<style>
.btnSelected {
  color: white;
  background-color: #246880 !important;

}
.btnDefault {
  color: black;
  background-color: white !important;
}
</style>
