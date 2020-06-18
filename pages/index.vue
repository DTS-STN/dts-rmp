<template>
  <div class="main">
    <div>
      <h1 class="title">
        {{ $t('dts') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('welcome') }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  // a simple route push to set default page for app
  fetch() {
    this.$router.push({ path: 'search/engagement' })
  }
}
</script>
