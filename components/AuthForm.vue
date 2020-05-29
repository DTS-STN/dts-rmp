<template>
  <!-- eslint-disable vue/html-self-closing -->
  <!-- eslint-disable vue/prop-name-casing -->
  <div class="form-container">
    <form @submit.prevent="submitForm">
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
        <label for="userInfoEmail" class="formLabel mt-6">Email</label>
        <input
          v-model="userInfo.email"
          class="formInput"
          type="text"
          name="userInfoEmail"
          placeholder="email"
        />
      </div>

      <div>
        <label for="userInfoPassword" class="formLabel mt-6">Password</label>
        <input
          v-model="userInfo.password"
          class="formInput"
          name="userInfoPassword"
          type="password"
          placeholder="password"
        />
      </div>

      <div class="errorBox">
        <span v-if="errorMessage">{{ errorMessage }}</span>
      </div>

      <div class="center-button">
        <AppButton
          custom_style="btn-extra"
          data_cypress="formButton"
          @click="submitForm(userInfo)"
        >
          {{ buttonText }}
        </AppButton>
      </div>
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
    buttonText: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      default: ''
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
.center-button {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.btn-extra {
  width: 100%;
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
.errorBox {
  @apply h-6 min-h-0 mt-2 text-red-700;
}
</style>
