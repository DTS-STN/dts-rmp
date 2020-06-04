<template>
  <div>
    <form @submit.prevent="filterEngagements">
      <br />
      <h1 class="text-4xl font-semibold">
        Search Engagements
      </h1>
      <div class="flex flex-wrap justify-start">
        <AppTextBox
          v-model="search"
          placeholder="Search engagements..."
          classes="p-3"
        />
        <AppButton
          custom_style="
          bg-orange-500 
          hover:bg-orange-700 
          rounded 
          border-2 
          border-orange-500 
          hover:border-orange-700 
          py-2 
          px-10 
          text-white 
          font-semibold"
        >
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

<style></style>
