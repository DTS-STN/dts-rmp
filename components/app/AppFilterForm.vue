<template>
  <div>
    <form @submit.prevent="filterEngagements">
      <div class="flex flex-wrap justify-start">
        <input
          v-model="search"
          type="text"
          class="search-input"
          placeholder="Search..."
          @keyup="filterEngagements"
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
  methods: {
    filterEngagements() {
      this.$emit('FilterEngagements', this.search)
    }
  }
}
</script>

<style scoped>
.search-input {
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
