<template>
  <div>
    <h1 class="title">Welcome, {{ this.$auth.user.name }}</h1>

    <h2 class="subtitle">
      this page is user who are logged-in
    </h2>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style lang="scss" scoped></style>
