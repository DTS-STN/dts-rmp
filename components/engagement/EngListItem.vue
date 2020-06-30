<template>
  <div>
    <p>
      ID: {{ id }}
      <br />
      Type: {{ type }}
      <br />
      Contacts: <span v-for="contact in contacts" :key="contact.id">
        {{ contact }}
      </span>
      <br />
      Tags: <span v-for="tag in tags" :key="tag.id">
        {{ tag }}
      </span>
      <br />
      Date: {{ date }}
      <br />
      Description: <span class="break-all">
        {{ description }}
      </span>
      <br />
      # of Participants: {{ participants }}
      <br />
      <br />
    </p>
  </div>
</template>

<script>
export default {
  name: 'Engagament',
  props: {
    id: { type: String, default: '-1' },
    type: { type: String, default: 'Unknown' },
    contacts: { type: Array, default: () => [] },
    tags: { type: Array, default: () => [] },
    date: { type: String, default: 'Unknown' },
    description: { type: String, default: 'Unknown' },
    participants: { type: Number, default: -1 }
  }
}
</script>

<style>

</style>
