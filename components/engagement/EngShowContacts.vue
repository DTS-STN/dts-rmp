<template>
  <div>
    <table class="contact-info">
      <tr>
        <td>
          {{ contactName + ', ' + department }}
        </td>
        <td>
          {{ lastEngTitle }}
        </td>
      </tr>
      <tr>
        <td>
          {{ contactEmail }}
        </td>
        <td>
          {{ engagementDate + ', ' + numParticipants + ' other participants' }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  // props: ['contactName', 'department', 'contactEmail', 'lastEngTitle', 'engagementDate', 'numParticipants'],
  props: {
    contactName: { type: String, default: '' },
    department: { type: String, default: '' },
    contactEmail: { type: String, default: '' },
    lastEngTitle: { type: String, default: '' },
    engagementDate: { type: String, default: '' }, // data type should be Date
    numParticipants: { type: Number, default: 0 }
  }
  /*
  data() {
    return {
      contactName: 'contact name',
      department: 'Government of Canada',
      contactEmail: 'email@email.com',
      lastEngTitle: 'last engagement title',
      engagementDate: '01/05/2020',
      numParticipants: 0
    }
  }
  */
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
