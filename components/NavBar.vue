<template>
  <div class="navbar-container">
    <div class="home">
      <nuxt-link to="/">
        Home
      </nuxt-link>
    </div>
    <div class="spacer" />
    <div class="navigation-items">
      <ul class="nav-list">
        <li v-if="!$auth.loggedIn" class="nav-item">
          <nuxt-link to="/register">
            Register
          </nuxt-link>
        </li>
        <li v-if="!$auth.loggedIn" class="nav-item">
          <nuxt-link to="/login">
            Login
          </nuxt-link>
        </li>
        <li v-if="$auth.loggedIn" class="nav-item text-white">
          Welcome {{ $auth.user.name }}
          <AppButton
            :data_cypress="logout"
            class="customBtn"
            @click="$auth.logout()"
          >
            Logout
          </AppButton>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
export default {
  name: 'NavBar',

  components: {
    AppButton
  }
}
</script>

<style scoped>
.navbar-container {
  height: 60px;
  width: 100%;
  /* position: fixed; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  @apply bg-teal-800;
}

.home {
  margin: 0 10px;
  font-size: 1.3rem;
}

.home a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: bg-gray-300;
}
.customBtn {
  @apply mt-0 ml-4 bg-teal-600;
}
.customBtn:hover {
  @apply bg-teal-400;
}
</style>
