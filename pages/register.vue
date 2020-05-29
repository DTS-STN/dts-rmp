<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="container">
    <h1 class="title">
      Register
    </h1>

    <AuthForm
      buttonText="Register"
      :register="true"
      :submitForm="registerUser"
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
    async registerUser(registrationInfo) {
      const { email, password } = registrationInfo

      try {
        await await this.$axios.post('/api/auth/register', { registrationInfo })

        // eslint-disable-next-line no-console
        console.log(`Registration correct`)

        await this.$auth.loginWith('local', {
          data: { email, password }
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Registration Failed')
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 800px;
  min-height: 30px;
  margin: auto;
  @apply bg-gray-300 shadow-md rounded px-8  mb-4;
}
</style>
