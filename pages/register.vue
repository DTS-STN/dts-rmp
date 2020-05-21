<template>
  <div class="container">
    <h1 class="title">
      Register
    </h1>

    <AuthForm
      button_text="Register"
      register="true"
      :submit-form="registerUser"
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
    registerUser(registrationinfo) {
      // eslint-disable-next-line no-console
      console.log('You pressed a button')
    }
  }
}
</script>

<style scoped></style>
