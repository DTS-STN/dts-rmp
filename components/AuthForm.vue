<template>
  <!-- eslint-disable vue/html-self-closing -->
  <div class="form-container">
    <form @submit.prevent="submit">
      <div>
        <label v-if="register" class="formLabel" for="userInfoName">Name</label>
        <input
          v-if="register"
          v-model="userInfo.name"
          class="formInput"
          type="text"
          placeholder="name"
        />
      </div>

      <div>
        <label for="userInfoEmail" class="formLabel">Email</label>
        <input
          v-model="userInfo.email"
          class="formInput"
          type="text"
          name="userInfoEmail"
          placeholder="email"
        />
      </div>

      <div>
        <label for="userInfoPassword" class="formLabel">Password</label>
        <input
          v-model="userInfo.password"
          class="formInput"
          name="userInfoPassword"
          type="password"
          placeholder="password"
        />
      </div>

      <AppButton
        custom_style="btn-extra"
        :data_cypress="formButton"
        @click="submitform(userInfo)"
      >
        {{ button_text }}
      </AppButton>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
export default {
  name: 'AuthForm',

  components: {
    AppButton
  },

  props: {
    submitForm: {
      type: Function,
      required: true
    },
    // eslint-disable-next-line vue/prop-name-casing
    button_text: {
      type: String,
      required: true
    },
    register: Boolean
  },

  data() {
    return {
      userInfo: {
        name: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 800px;
  min-height: 400px;
  margin: auto;
  @apply bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4;
}
.btn-extra {
}
.formLabel {
  @apply block text-gray-700 text-sm font-bold mb-2;
}
.formInput {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
}
.formInput:focus {
  @apply outline-none shadow-outline;
}
</style>
