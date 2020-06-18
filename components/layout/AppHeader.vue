<template>
  <div>
    <div class="sm:flex justify-between p-4">
      <div id="canadaImg">
        <div v-if="this.$i18n.locale === 'en'">
          <a :alt="$t('header.linkAlt')" :href="$t('header.link')">
            <img
              class="w-64 sm:w-full"
              :alt="$t('header.logoAlt')"
              src="@/assets/images/canada_header.svg"
            />
          </a>
        </div>
        <div v-else>
          <a :alt="$t('header.linkAlt')" :href="$t('header.link')">
            <img
              class="w-64 sm:w-full"
              :alt="$t('header.logoAlt')"
              src="@/assets/images/canadaFr.svg"
            />
          </a>
        </div>
      </div>
      <AppToggleLang />
    </div>
    <div id="blue-background" class="relative">
      <div class="flex justify-between absolute bottom-0 w-full">
        <span class="pt-5">
          {{ $t('header.welcomeOne') }} 'Name'{{ $t('header.welcomeTwo') }}
        </span>
        <div id="userInfo">
          <div class="flex p-6">
            <ul class="underline mr-2">
              <li>
                <a href="#"> {{ $t('header.dashboard') }}</a>
              </li>
              <li>
                <a href="#"> {{ $t('header.logout') }}</a>
              </li>
            </ul>
            <div id="userImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
#blue-background {
  background-image: url('../../assets/images/wave.png');
  /* min-height: 400px; */
  height: 250px;
  @apply bg-local bg-top bg-cover bg-no-repeat bg-white;
}
#userImg {
  height: 50px;
  width: 50px;
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
