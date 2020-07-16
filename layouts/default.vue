<template>
  <div class="main-container">
    <header>
      <AppHeader />
      <AppNavBtn v-if="shouldDisplayNav" />
    </header>
    <main>
      <!-- <TitleComponent /> -->
      <nuxt />
    </main>
    <footer>
      <AppFooterLandscape />
      <AppFooterLinks />
    </footer>
  </div>
</template>
<script>
export default {
  computed: {
    shouldDisplayNav() {
      return !this.$route.path.includes('view')
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.main-container {
  min-height: 100vh;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
/* main {
  background-image: url('../assets/images/u1.png');
  min-height: 700px;
  height: auto;
  @apply bg-local bg-top bg-cover bg-no-repeat bg-white;
} */
footer {
  @apply bg-teal-800;
}
</style>
