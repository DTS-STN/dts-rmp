<template>
  <div>
    <h1 class="title">
      Welcome <span>{{ this.$auth.user.name }}</span>
    </h1>

    <h2 class="subtitle">
      this page is for users who are logged-in
    </h2>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style lang="scss" scoped></style>
