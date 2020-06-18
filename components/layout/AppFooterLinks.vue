<template>
  <div class="leading-10 bg-white">
    <div class="container-links">
      <nav class="xl:flex py-8">
        <ul
          id="fLinks"
          class="md:grid md:grid-cols-2 xl:flex xl:justify-between"
        >
          <li>
            <a href="https://www.canada.ca/en/social.html">
              <!-- {{ $t('footer.social') }} -->
              Social media
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/mobile.html">
              <!-- {{ $t('footer.mobile') }} -->
              Mobile applications
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/government/about.html">
              <!-- {{ $t('footer.about') }} -->
              About canada.ca
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/transparency/terms.html">
              <!-- {{ $t('footer.terms') }} -->
              Terms and conditions
            </a>
          </li>
          <li>
            <a href="https://www.canada.ca/en/transparency/privacy.html">
              <!-- {{ $t('footer.privacy') }} -->
              Privacy
            </a>
          </li>
          <li>
            <a href="https://home.dts-stn.com/start.html">
              <!-- {{ $t('footer.dts') }} -->
              Digital Technology Solutions
            </a>
          </li>
        </ul>
        <div class="flex justify-between xl:inline-block">
          <div class="pt-6 pl-2 xl:hidden">
            <a href="#nav-top-page">
              <span class="glyphicon glyphicon-chevron-up">Top of Page</span>
            </a>
            <!-- <a href="#nav-top-page">{{ $t('footer.top') }}<span class="glyphicon glyphicon-chevron-up"></span></a> -->
          </div>
          <div id="footer-img" class="mr-6 float-right">
            <img
              id="cnd-img"
              src="../../assets/images/canada_footer_logo.svg"
              alt="Canada logo"
              title="Canada logo"
              class="h-10 mb-2 mt-4"
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
