<template>
  <div>
    <select
      name="Engagement"
      class="
      bg-white
      border 
      border-blue-400 
      hover:border-blue-800 
      rounded 
      p-2"
    >
      <!-- Drop-down values are just placeholders. Not official -->
      <option value="-1">
        Select an Engagement
      </option>
      <option value="Conference">
        Conference
      </option>
      <option value="Meeting">
        Meeting
      </option>
      <option value="Discussion">
        Discussion
      </option>
      <option value="Consulation">
        Consulation
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Engagement'
}
</script>

<style></style>
