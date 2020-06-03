<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="register-container">
    <h1 class="subtitle">
      Create an account
    </h1>
    <div class="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod
      fugit nam veniam est eum, id labore odio, itaque harum officia eaque
      explicabo neque sapiente facere ullam eius fugiat enim.
    </div>
    <AuthRegister
      buttonText="Create account"
      :submitForm="registerUser"
      :errorMessage="error"
    />
  </div>
</template>

<script>
import AuthRegister from '@/components/AuthRegister.vue'

export default {
  components: {
    AuthRegister
  },
  data() {
    return { error: null }
  },
  methods: {
    async registerUser(registrationInfo) {
      const { email, password } = registrationInfo

      try {
        await await this.$axios.post('/api/auth/register', { registrationInfo })

        // eslint-disable-next-line no-console
        console.log(`Registration correct`)

        await this.$auth.loginWith('local', {
          data: { loginInfo: { email, password } }
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Registration Failed ==> ', e.response)
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style scoped>
.subtitle {
  @apply text-white;
}
</style>
