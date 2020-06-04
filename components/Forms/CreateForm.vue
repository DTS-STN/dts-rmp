<template>
  <div class="px-5">
    <!-- Form -->
    <form @submit.prevent="createEngagement">
      <!-- General Information Section -->
      <h1 class="text-4xl font-semibold">
        General Information
      </h1>
      <h5>All fields are mandatory.</h5>
      <br />
      <!-- General Information flex div -->
      <div class="flex flex-wrap -mb-4">
        <!-- Subject div -->
        <div class="w-full sm:w-1/3 mb-4">
          <label>Subject</label>
          <br />
          <AppTextBox />
        </div>
        <!-- Date div -->
        <div class="w-full sm:w-1/3 mb-4">
          <label>Date</label>
          <br />
          <AppTextBox texttype="date" />
        </div>
        <!-- EngagementType div -->
        <div class="w-full sm:w-1/3 mb-4">
          <label>Type of EngagementType</label>
          <br />
          <EngagementType />
        </div>
        <!-- Status div -->
        <div class="w-full sm:w-1/3 mb-4">
          <label>Type of Status</label>
          <br />
          <Status />
        </div>
        <!-- Key Notes div -->
        <div class="w-full sm:w-2/3 mb-4">
          <label>Key Notes</label>
          <br />
          <KeyNotes />
        </div>
      </div>
      <br />
      <!-- Contact Information Section-->
      <h1 class="text-4xl font-semibold">
        Contact Information
      </h1>
      <h5>All fields are mandatory.</h5>
      <br />
      <!-- Contact Information flex div -->
      <div class="flex flex-wrap -mb-4">
        <!-- Key Contact Name div -->
        <div class="w-full sm:w-1/3 mb-4">
          <label>Key Contact Name</label>
          <br />
          <AppTextBox />
        </div>
        <!-- Key Contact Email div -->
        <div class="w-full sm:w-1/3 mb-4">
          <label>Key Contact Email</label>
          <br />
          <AppTextBox />
        </div>
        <!-- ESDC Contact Name div -->
        <div class="w-full sm:w-1/3 mb-4">
          <label>ESDC Contact Name</label>
          <br />
          <AppTextBox />
        </div>
      </div>
      <br />
      <!-- Previous Button -->
      <div class="sm:float-right">
        <AppButton
          btntype="button"
          custom_style="
          bg-white 
          hover:bg-blue-200 
          border-2 
          border-blue-800 
          rounded 
          py-2 
          px-10 
          text-blue-800 
          font-semibold mr-3"
        >
          Previous
        </AppButton>
        <!-- Submit Button -->
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
          Submit
        </AppButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    createEngagement() {
      this.$emit('createEngagement', ['arguments', 'go', 'here'])
      // We might want to redirect after creation..
      // or stay on page and empty all fields
    }
  }
}
</script>

<style></style>
