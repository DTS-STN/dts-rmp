<template>
  <div>
    <div class="xl:flex xl:mx-16 sm:flex justify-between p-4">
      <div id="canadaImg" class="w-64 lg:w-1/4" data-cy="canada-link">
        <div v-if="this.$i18n.locale === 'en'">
          <a :alt="$t('header.linkAlt')" :href="$t('header.link')" target="_blank">
            <img
              :alt="$t('header.logoAlt')"
              src="@/assets/images/canada_header.svg"
            />
          </a>
        </div>
        <div v-else>
          <a :alt="$t('header.linkAlt')" :href="$t('header.link')" target="_blank">
            <img
              :alt="$t('header.logoAlt')"
              src="@/assets/images/canadaFr.svg"
            />
          </a>
        </div>
      </div>
      <AppToggleLang />
    </div>
    <div id="blue-background" class="relative">
      <div class="flex justify-between absolute bottom-0 w-full px-5 py-3">
        <nuxt-link :to="localePath('/')">
          <img
            data-cy="home-button"
            src="@/assets/images/Home.svg"
            class="h-20"
            :alt="$t('header.homeAlt')"
          />
        </nuxt-link>
        <span class="hidden sm:block pt-5 text-2xl">
          Text placeholder
        </span>
        <div id="userInfo">
          <div class="flex p-6">
            <ul class="underline mr-2">
              <li>
                <nuxt-link :to="localePath('/dashboard')" data-cy="dashboard-link" class="text-xl">
                  {{ $t('header.dashboard') }}
                </nuxt-link>
              </li>
              <li>
                <!-- This <a> tag will probably be a nuxt-link once we get the account system going. -->
                <a href="#" class="text-xl">
                  {{ $t('header.logout') }}
                </a>
              </li>
            </ul>
            <div id="userImg" />
          </div>
        </div>
      </div>
    </div>
    <!-- buttons go here -->
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)
    }
  }
}
</script>

<style>
#blue-background {
  background-image: url('../../assets/images/wave.png');
  /* min-height: 400px; */
  height: 225px;
  @apply bg-local bg-top bg-cover bg-no-repeat bg-white;
}
#userImg {
  height: 60px;
  width: 60px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
@media (max-width: 420px) {
  #canadaImg {
    margin-bottom: 25px;
  }
}
</style>
