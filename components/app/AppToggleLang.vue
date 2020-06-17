<template>
  <div class="text-right">
    <nuxt-link v-if="this.$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      {{ en }}
    </nuxt-link>
    <nuxt-link v-if="this.$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
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
      default: 'French',
      type: String
    }
  }
}
</script>
