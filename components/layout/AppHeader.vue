<template>
  <div class="sm:flex justify-between p-4">
    <div>
      <div v-if="this.$i18n.locale === 'en'">
        <a :alt="$t('header.linkAlt')" :href="$t('header.link')">
          <img
            class="header-cnd-img"
            :alt="$t('header.logoAlt')"
            width="100%"
            src="@/assets/images/canada_header.svg"
          />
        </a>
      </div>
      <div v-else>
        <a :alt="$t('header.linkAlt')" :href="$t('header.link')">
          <img
            class="header-cnd-img"
            :alt="$t('header.logoAlt')"
            width="100%"
            src="@/assets/images/canadaFr.svg"
          />
        </a>
      </div>
    </div>
    <AppToggleLang />
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style></style>
