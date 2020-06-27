<template>
  <div>
    <table class="contact-info">
      <tr>
        <td>
          Contact name, Government of Canada
        </td>
        <td>
          last engagement title
        </td>
      </tr>
      <tr>
        <td>
          email@email.com
        </td>
        <td>
          date, number of participants
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  table,
  td {
    @apply border-t border-b border-gray-400 p-5 mt-10 w-6/12;
  }

  td {
    @apply border-none;
  }
</style>
