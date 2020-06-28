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
      <td class="font-bold text-lg" style="padding-left: 10px">
        Contact name
      </td>
      <div class="contact-1">
        <app-select
          :options="contacts"
          @change="isSelected1=true"
        />
      </div>
      <div v-if="moreContacts" class="contact-2">
        <h3 class="font-bold text-lg">
          Contact number 2
        </h3>
        <app-select
          :options="contacts"
          @change="isSelected2=true"
        />
        <button class="underline" @click.prevent="moreContacts=false">
          Remove
        </button>
      </div>
      <!--
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
      -->
      <td>
        <button @click.prevent="moreContacts=true">
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
    <div v-if="isSelected1" class="show-contact1">
      <show-contacts
        :contact-name="contactName"
        :department="department"
        :contact-email="contactEmail"
        :last-eng-title="lastEngTitle"
        :engagement-date="engagementDate"
        :num-participants="numParticipants"
        :is-selected="isSelected1"
      />
      <button @click="isSelected1=false">
        Remove
      </button>
    </div>
    <div v-if="isSelected2" class="show-contact2">
      <show-contacts
        :contact-name="contactName"
        :department="department"
        :contact-email="contactEmail"
        :last-eng-title="lastEngTitle"
        :engagement-date="engagementDate"
        :num-participants="numParticipants"
        :is-selected="isSelected2"
      />
      <button @click="isSelected2=false">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import AppSelect from '../app/AppSelect'
import showContacts from './EngShowContacts'
export default {
  components: {
    AppSelect,
    showContacts
  },
  data() {
    return {
      contactName: 'contact name',
      department: 'Government of Canada',
      contactEmail: 'email@email.com',
      lastEngTitle: 'last engagement title',
      engagementDate: '01/05/2020',
      numParticipants: 0,
      contacts: [
        { key: 1, value: 'contact1', options: 'contact1' },
        { key: 1, value: 'contact2', options: 'contact2' },
        { key: 1, value: 'contact3', options: 'contact3' }
      ],
      moreContacts: false,
      isSelected1: false,
      isSelected2: false
    }
  },
  methods: {

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

button {
  @apply font-bold text-lg
}

button:focus,
option:focus {
  @apply outline-none;
}
</style>
