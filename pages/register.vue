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
    />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'

export default {
  components: {
    AuthForm
  },
  methods: {
    async registerUser(registrationInfo) {
      // eslint-disable-next-line no-console
      console.log(registrationInfo)

      try {
        await await this.$axios.post('/users', registrationInfo)

        // eslint-disable-next-line no-console
        console.log(`Registration correct`)

        await this.$auth.loginWith('local', {
          data: registrationInfo
        })

        this.$router.push('/welcome')
      } catch {
        // eslint-disable-next-line no-console
        console.log('Registration Failed')
      }
    }
  }
}
</script>

<style scoped></style>
