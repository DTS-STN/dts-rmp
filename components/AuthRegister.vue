<template>
  <!-- eslint-disable vue/html-self-closing -->
  <!-- eslint-disable vue/prop-name-casing -->
  <div class="form-container">
    <!-- <form @submit.prevent="submitForm(userInfo)"> -->
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

    <!-- <div>
        <label for="userInfoEmail" class="formLabel mt-6">email</label>
        <input
          v-model="userInfo.email"
          class="formInput"
          type="text"
          name="userInfoEmail"
          placeholder="email"
        /> 

        <label for="userInfoPassword" class="formLabel mt-6">Password</label>
        <input
          v-model="userInfo.password"
          class="formInput"
          name="userInfoPassword"
          type="password"
          placeholder="password"
        /> 
      </div> -->

    <!-- <div class="center-button">
        <AppButton custom_style="btn-extra" data_cypress="formButton">
          {{ buttonText }}
        </AppButton>
      </div> -->
    <!-- </form> -->
    <h2>Log In</h2>
    <div class="errorBox">
      <span v-if="errorMessage">{{ errorMessage }}</span>
    </div>

    <form @submit.prevent="submitForm(userInfo)">
      <div class="flex bg-gray-700 mb-4">
        <div class="w-5/12 text-gray-700 bg-orange-300 px-1 py-2 m-2">
          <label for="userInfoEmail" class="formLabel">Email</label>
          <input
            v-model="userInfo.email"
            class="formInput"
            type="text"
            placeholder="email"
          />
        </div>
        <div class="w-5/12 text-gray-700 bg-blue-400 px-1 py-2 m-2">
          <label for="userInfoPassword" class="formLabel">Password</label>
          <input
            v-model="userInfo.password"
            class="formInput"
            name="userInfoPassword"
            type="password"
            placeholder="password"
          />
        </div>
        <div class="w-2/12 text-gray-700 bg-yellow-400 px-1 py-2 m-2">
          <AppButton custom_style="btn-extra" data_cypress="formButton">
            {{ buttonText }}
          </AppButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
export default {
  name: 'AuthRegister',

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
        name: 'Frida Kahlo',
        email: 'frida@hrsdc-rhdcc.gc.ca`',
        password: '1234'
      }
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 900px;
  min-height: 400px;
  margin: auto;
  @apply bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4;
}
.center-button {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.formLabel {
  @apply text-gray-700 text-sm font-bold;
}
.formInput {
  @apply shadow w-full appearance-none border rounded text-gray-700 leading-tight;
}
.formInput:focus {
  @apply outline-none shadow-outline;
}
.btn-extra {
  @apply w-full my-2 bg-orange-700;
}
.errorBox {
  @apply h-6 min-h-0 mt-2 text-red-700;
}
</style>
