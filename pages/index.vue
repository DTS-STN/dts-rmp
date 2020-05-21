<template>
  <div class="main">
    <div>
      <logo />
      <h1 class="title">
        dts-rmp
      </h1>
      <h2 class="subtitle">
        knowledge management portal proof of concept!
      </h2>

      <div v-if="!$auth.loggedIn">
        If you do not have an account, <a href="register">Register</a> or
        <a href="login">login</a>
      </div>

      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      <div v-else>welcome... {{ $auth.user.name }}</div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.main {
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  @apply pt-12 text-center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
