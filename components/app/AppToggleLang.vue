<template>
  <div id="lang-toggle-button" class="text-right">
    <nuxt-link
      v-if="this.$i18n.locale !== 'en'"
      data-cy="lang-tog-en"
      :to="switchLocalePath('en')"
    >
      {{ en }}
    </nuxt-link>
    <nuxt-link
      v-if="this.$i18n.locale !== 'fr'"
      data-cy="lang-tog-fr"
      :to="switchLocalePath('fr')"
    >
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
