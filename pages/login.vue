<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="login-container">
    <AuthLogin
      buttonText="Log in"
      :submitForm="loginUser"
      :errorMessage="error"
    />
  </div>
</template>

<script>
import AuthLogin from '@/components/AuthLogin.vue'

export default {
  components: {
    AuthLogin
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
  color: cyan;
}
.links {
  padding-top: 15px;
}
</style>
