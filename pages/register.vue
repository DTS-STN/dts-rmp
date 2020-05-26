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
      const { name, email, password } = registrationInfo
      // eslint-disable-next-line no-console
      console.log('name : ', name, ' | pass : ', password, ' | email : ', email)

      try {
        await await this.$axios.post('/api/auth/register', { registrationInfo })

        // eslint-disable-next-line no-console
        console.log(`Registration correct`)

        // await this.$auth.loginWith('local', {
        //   data: registrationInfo
        // })

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
