<template>
  <div class="contact mb-8">
    <h1 class="text-5xl">
      New Engagement
    </h1>
    <h2 class="text-4xl">
      Contact
    </h2>
    <form class="relative mt-6 max-w-md">
      <td>
        <img src="../../assets/images/required.png" />
      </td>
      <td class="font-bold text-xl" style="padding-left: 10px">
        Contact name
      </td>
      <select id="contacts" class="appearance-none bg-white">
        <option value="default" selected="selected">
          Start typing and select one
        </option>
        <option v-for="contact in contacts" :key="contact.name">
          {{ contact.name }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
      <td>
        <button class="add-contact font-bold text-lg">
          Add more contacts
        </button>
      </td>
      <td>
        <span
          class="border border-solid border-black rounded-full h-5 w-5 flex items-center justify-center"
        >
          +
        </span>
      </td>
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

<style scoped>
h1 {
  padding-bottom: 50px;
}

h1,
h2 {
  color: #246880;
  @apply font-bold;
}

tr,
td {
  padding: 5px;
}

#contacts {
  @apply w-full cursor-pointer border border-black border-solid text-gray-700 py-3 px-4 pr-8 rounded leading-tight;
}

.add-contact {
  padding-top: 20px;
  @apply underline border-none bg-white;
}

button:focus,
option:focus {
  @apply outline-none;
}
</style>
