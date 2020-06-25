<template>
  <div class="contact font-serif">
    <h1 class="font-bold">
      Contact
    </h1>
    <form class="relative mt-6 max-w-md">
      <td>
        <img src="../../assets/images/required.png" />
      </td>
      <td class="font-bold text-xl" style="padding-left: 10px">
        Contact name
      </td>

      <select id="contacts">
        <option value="default" selected="selected">
          Start typing and select one
        </option>
        <option v-for="contact in contacts" :key="contact.name">
          {{ contact.name }}
        </option>
      </select>
      <button class="add-contact font-bold text-lg">
        Add more contacts
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { name: 'contact1' },
        { name: 'contact2' },
        { name: 'contact3' }
      ]
    }
  }
}
</script>

<style>
h1 {
  color: #246880;
  font-size: 50px;
}

tr,
td {
  padding: 5px;
}

.contact {
  padding: 50px;
}

#contacts {
  @apply w-full cursor-pointer border border-black border-solid text-gray-700 py-3 px-4 pr-8 rounded leading-tight;
}

.add-contact {
  padding-top: 20px;
  @apply underline border-none bg-white;
}

button:focus,
select:focus,
option:focus {
  @apply outline-none;
}
</style>
