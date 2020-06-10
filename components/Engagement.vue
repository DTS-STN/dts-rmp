<template>
  <div class="p-3">
    <nuxt-link :to="'./list/' + id">
      <div>
        <span>Title: {{ title }}</span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Engagament',
  props: {
    id: {
      default: -1,
      type: Number
    },
    title: {
      default: 'Unknown',
      type: String
    }
  }
}
</script>
<style></style>
