<template>
  <!-- eslint-disable vue/html-self-closing -->
  <!-- eslint-disable vue/prop-name-casing -->
  <div class="form-container">
    <h2 class="title">
      Log in
    </h2>
    <div class="errorBox">
      <span v-if="errorMessage">{{ errorMessage }}</span>
    </div>

    <form @submit.prevent="submitForm(userInfo)">
      <div class="flex mb-4">
        <div class="w-5/12 margins">
          <label for="userInfoEmail" class="formLabel">Email</label>
          <input
            v-model="userInfo.email"
            class="formInput"
            type="text"
            placeholder="email"
          />
        </div>
        <div class="w-5/12 margins">
          <label for="userInfoPassword" class="formLabel">Password</label>
          <input
            v-model="userInfo.password"
            class="formInput"
            name="userInfoPassword"
            type="password"
            placeholder="password"
          />
        </div>
        <div class="w-2/12 margins">
          <AppButton custom_style="btn-extra" data_cypress="formButton">
            {{ buttonText }}
          </AppButton>
        </div>
      </div>
    </form>
    <div class="link">
      <nuxt-link to="register">
        Don't have an account?
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
export default {
  name: 'AuthLogin',

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
    }
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
  @apply px-8 pt-6 pb-8 mb-4 text-white;
}
.formLabel {
  font-family: 'Noto Serif', 'Roboto slab', 'sans-serif', 'Helvetica Neue';
  @apply font-bold;
}
.formInput {
  @apply shadow w-full appearance-none border rounded text-gray-700 leading-tight leading-7;
}
.formInput:focus {
  @apply outline-none shadow-outline;
}
.btn-extra {
  @apply w-full mt-4 bg-orange-600;
}
.errorBox {
  @apply h-6 min-h-0 mt-2 text-red-700;
}
.link {
  @apply underline ml-4 -mt-6 font-bold text-sm;
}
.title {
  font-family: 'Noto Serif', 'Roboto slab', 'sans-serif', 'Helvetica Neue';
  @apply text-left tracking-wide font-extrabold text-4xl pt-4 text-white;
}
.margins {
  @apply px-1 py-2 m-2;
}
</style>
