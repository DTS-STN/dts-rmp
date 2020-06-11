<template>
  <div>
    <form @submit.prevent="filterEngagements">
      <br />
      <h1 class="text-4xl font-semibold">
        Search Engagements
      </h1>
      <div class="flex flex-wrap justify-start">
        <!-- <AppTextBox
          v-model="search"
          placeholder="Search engagements..."
          classes="p-3"
        /> -->
        <input
          v-model="search"
          type="text"
          class="border border-blue-400 hover:border-blue-800 rounded p-3"
          placeholder="Search..."
        />
        <AppButton class="search-button">
          Search
        </AppButton>
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
      this.search = ''
    }
  }
}
</script>

<style scoped>
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
