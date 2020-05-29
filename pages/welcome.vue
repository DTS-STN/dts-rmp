<template>
  <div>
    <h1 class="title">
      Welcome <span>{{ this.$auth.user.name }}</span>
    </h1>

    <h2 class="subtitle">
      this page is for users who are logged-in
    </h2>
    <div
      class="flex sm:content-start flex-wrap sm:justify-around justify-center"
    >
      <StartBoxes title="title" message="Description goes here" />
      <StartBoxes title="title2" message="Description goes here2" />
      <StartBoxes title="title3" message="Description goes here3" />
    </div>
  </div>
</template>

<script>
import StartBoxes from '~/components/StartBoxes'
export default {
  middleware: 'auth',
  components: {
    StartBoxes
  }
}
</script>

<style lang="scss" scoped></style>
