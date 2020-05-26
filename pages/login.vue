<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="login-container">
    <h1 class="title">
      Login
    </h1>

    <AuthForm buttonText="Login" :submitForm="loginUser" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'

export default {
  components: {
    AuthForm
  },
  methods: {
    async loginUser(loginInfo) {
      // eslint-disable-next-line no-console
      console.log(loginInfo)
      try {
        await this.$auth.loginWith('local', {
          data: { loginInfo }
        })
        // eslint-disable-next-line no-console
        console.log(`Login correct, ${this.$auth.user.name}`)
        this.$router.push('/welcome')
      } catch {
        // eslint-disable-next-line no-console
        console.log('Login Failed')
        this.$router.push('/index')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  @apply bg-orange-100;
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
