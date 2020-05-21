<template>
  <div class="login-container">
    <h1 class="title">
      Login
    </h1>

    <AuthForm button_text="Login" :submit-form="loginUser" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'

export default {
  components: {
    AuthForm
  },
  methods: {
    loginUser(logininfo) {
      // eslint-disable-next-line no-console
      console.log('You pressed a button')
    }
  }
}
</script>

<style scoped>
.login-container {
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
