<template>
  <div>
    <form @submit.prevent="filter">
      <div class="flex flex-wrap justify-start">
        <input
          ref="searchInput"
          v-model="search"
          type="text"
          class="search-input"
          :placeholder="$t('app.search')+'...'"
          @keyup="filter"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },

  mounted() {
    this.$refs.searchInput.focus()
  },

  methods: {
    filter() {
      this.$emit('filter', this.search)
    }
  }
}
</script>

<style scoped>
.search-input {
    min-width: 325px;
    @apply border border-blue-400 rounded p-3;
}
.search-input:hover {
    @apply border-blue-800;
}
.search-button {
  @apply bg-orange-500
          rounded
          border-2
          border-orange-500
          py-2
          px-10
          text-white
          font-semibold
          mt-0;
}
.search-button:hover {
  @apply bg-orange-700 border-orange-700;
}
</style>
