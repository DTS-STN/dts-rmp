<template>
  <div id="lang-toggle-button" class="text-right">
    <nuxt-link  data-cy="lang-tog-en" v-if="this.$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      {{ en }}
    </nuxt-link>
    <nuxt-link data-cy="lang-tog-fr" v-if="this.$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
      {{ fr }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    en: {
      default: 'English',
      type: String
    },
    fr: {
      default: 'Français',
      type: String
    }
  }
}
</script>
