<template>
  <div class="px-5 h-auto">
    <form @submit.prevent="filterEngagements">
      <h1 class="text-4xl font-semibold">
        Search Engagements
      </h1>
      <br />
      <div class="flex flex-wrap justify-start">
        <AppTextBox placeholder="Search engagements..." classes="p-3" />
        <AppFormButton
          text="Search"
          class="
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
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    filterEngagements() {
      this.$emit('FilterEngagements', ['arguments', 'go', 'here'])
      // display filtered engagements
    }
  }
}
</script>

<style></style>
