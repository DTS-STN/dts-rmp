<template>
  <div class="px-10 py-5">
    <div class="flex w-full">
      <div class="w-3/4">
        <h2 class="text-xl">
          Engagement Dashboard
        </h2>
      </div>
      <div class="w-1/4">
        <!-- <AppButton /> -->
        <input id="pdfButton" type="button" value="Download PDF" />
      </div>
    </div>
    <div class="flex">
      <form class="flex">
        <select id="time" name="time">
          <option value="sixMonths">
            Last 6 months
          </option>
          <option value="threeMonths">
            Last 3 months
          </option>
          <option value="oneMonth">
            Last month
          </option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#pdfButton {
  background-color: #246880;
  color: white;
  border-radius: 8px;
  padding: 12px 25px;
}
</style>
