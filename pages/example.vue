<template>
  <div class="container">
    <h2>Is SSR? {{ isSSR }}</h2>

    <vue-editor v-model="content" placeholder="Write Something..." />
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      content: '',
      pageIsMounted: false,
      isSSR: !!process.server
    }
  }
}
</script>

<style scoped>
.container {
  background-color: white;
  min-height: 35vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>
