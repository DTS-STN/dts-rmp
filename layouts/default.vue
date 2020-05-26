<template>
  <div class="main-container">
    <header>
      <!-- <Header />    placeholder for the Header -->

      <!-- Temporary navbar containing   home, login/logout buttons -->
      <NavBar />
    </header>

    <main class="background-col">
      <HeaderImg />
      <nuxt />
    </main>

    <footer>
      <!-- <Footer />    placeholderfor the footer -->
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HeaderImg from '@/components/Header.vue'
export default {
  components: {
    NavBar,
    HeaderImg
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
.background-col {
  background-color: rgb(216, 241, 248);
}
</style>
