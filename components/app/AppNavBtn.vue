<template>
  <div class="app">
    <button class="switch add">
      <h2>New engagement</h2>
    </button>
    <button class="switch search">
      <h2>Search contacts & engagements</h2>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style>
button:focus {
  outline: none;
}

button:disabled {
  @apply text-orange-600 bg-white;
}

button.switch {
  padding: 40px;
  @apply cursor-pointer text-4xl font-serif underline shadow-sm font-bold border-0 text-center m-0 w-6/12;
}

button.add {
  @apply float-left bg-white text-orange-600;
}

button.search {
  @apply float-right bg-orange-600 text-white;
}
</style>
