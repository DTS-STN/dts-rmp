<template>
  <div class="leading-10 bg-white">
    <div class="container-links">
      <nav class="py-8 xl:flex xl:mx-10 font-body">
        <ul
          id="fLinks"
          class="md:grid md:grid-cols-2 xl:flex xl:justify-between xl:mx-auto"
        >
          <li>
            <a href="https://www.canada.ca/en/social.html">
              {{ $t('footer.social') }}
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/mobile.html">
              {{ $t('footer.mobile') }}
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/government/about.html">
              {{ $t('footer.about') }}
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/transparency/terms.html">
              {{ $t('footer.terms') }}
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/transparency/privacy.html">
              {{ $t('footer.privacy') }}
            </a>
          </li>
          <li>
            <a href="https://home.dts-stn.com/">
              {{ $t('footer.dts') }}
            </a>
          </li>
        </ul>
        <div class="flex justify-between xl:inline-block xl:mx-auto">
          <div class="pt-6 pl-2 xl:hidden">
            <a href="#nav-top-page">
              <span class="glyphicon glyphicon-chevron-up">{{
                $t('footer.top')
              }}</span>
            </a>
          </div>
          <div id="footer-img">
            <img
              id="cnd-img"
              src="../../assets/images/canada_footer_logo.svg"
              :alt="$t('footer.symbol')"
              :title="$t('footer.symbol')"
              class="h-10 mb-2 mt-4 xl:mt-2"
            />
            <!-- <img id="cnd-img" src="~/assets/img/canada_footer_logo.svg" :alt=" $t('footer.symbol') " :title=" $t('footer.symbol') " /> -->
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooterLinks'
}
</script>

<style>
.columns {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
#fLinks li::before {
  content: '•';
  margin-right: 0.7em;
}
.container-links {
  @apply px-4;
}
.glyphicon {
  position: relative;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-chevron-up::after {
  content: '^';
}
@media (min-width: 1280px) {
  #fLinks li {
    margin-left: 15px;
  }
  #fLinks li:first-child:before {
    content: ' ';
  }
}
</style>
