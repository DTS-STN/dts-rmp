<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="login-container">
    <h1 class="title">
      Login
    </h1>

    <AuthForm
      buttonText="Login"
      :submitForm="loginUser"
      :errorMessage="error"
    />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'

export default {
  components: {
    AuthForm
  },
  data() {
    return { error: null }
  },
  methods: {
    async loginUser(loginInfo) {
      try {
        await this.$auth.loginWith('local', {
          data: { loginInfo }
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('error : ', e.response)
        this.error = e.response.data.message
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
