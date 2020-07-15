<template>
  <div>
    <div id="btna" class="app flex">
      <nuxt-link
        :to="localePath('/search/engagement')"
        data-cy="search-nav"
        class="nav-link"
        :class="{ 'nav-link-selected' : currentPath.includes('search')}"
      >
        {{ $t('NavBtn.SearchConEn') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('/add/engagement')"
        data-cy="add-nav"
        class="nav-link"
        :class="{ 'nav-link-selected' : currentPath.includes('add')}"
      >
        {{ $t('NavBtn.AddConEn') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentPath() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: #D87C4F;
  background-color: white;
  padding: 25px;
  box-shadow: none;
  @apply cursor-pointer text-3xl font-display font-bold text-center w-full border underline;
}

.nav-link:focus {
  outline: none;
}

.nav-link-selected {
  color: white;
  background-color: #D87C4F;
  box-shadow: 'inset 0 10px 30px rgba(0, 0, 0, 0.5), 0 10px rgba(255, 255, 255, 0.5)';
}

@media (max-width: 660px) {
  #btna {
    @apply flex-col w-auto;
  }
}

@media (max-width: 660px) {
  #h2Text {
    @apply text-2xl;
  }
}
</style>
