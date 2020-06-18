<template>
  <div class="main">
    <div>
      <h1 class="title">
        dts-rmp
      </h1>

      <h2 class="subtitle">
        relationship management portal proof of concept!
      </h2>
    </div>
    <div class="nav-cmp">
      <AppButton class="create">
        New engagement
      </AppButton>
      <AppButton class="search">
        Search contacts & engagement
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from '../components/app/AppButton.vue'
export default {
  components: {
    AppButton
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.main {
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  @apply pt-12 text-center;
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

.create {
  float: left;
  margin: 0;
  font-size: 50px;
  background-color: white;
  color: orangered;
  width: 50%;
  border: none;
  text-align: center;
  padding: 40px;
}

.search {
  float: right;
  margin: 0;
  font-size: 50px;
  background-color: orangered;
  color: white;
  width: 50%;
  border: none;
  text-align: center;
  padding: 40px;
}
</style>