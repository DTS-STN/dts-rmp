<template>
  <div class="md:w-2/12 margins">
    <select
      class="formSelect"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </select>
  </div>
</template>

<script>
export default {
  /*
  props: {
    options: {
      type: Array,
      required: true
    }
  }
  */
}
</script>

<style scoped>
.contact-menu {
  width: 1200px;
  margin: auto;
  font-family: 'DejaVu Serif', 'Roboto slab', 'sans-serif', 'Helvetica Neue';
  @apply bg-white text-black;
}
.formSelect {
  @apply w-full h-12 border-2 bg-white border-gray-400 rounded;
}
.formselect:focus {
  @apply outline-none border-blue-500;
}
.margins {
  @apply py-2 mr-4 my-1;
}
</style>
