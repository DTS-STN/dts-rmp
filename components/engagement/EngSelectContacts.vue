<template>
  <div class="contact mb-8">
    <h1 class="text-5xl">
      {{ $t('engSelect.engagement') }}
    </h1>
    <h2 class="text-4xl">
      Contact
    </h2>
    <form class="relative mt-6 max-w-md">
      <label
        class="orange block tracking-wide text-black text-md font-bold mb-2"
        for="subject"
      >
        {{ $t('engSelect.name') }}
      </label>
      <div class="contact-1">
        <form-select @change="showContact($event)">
          <option v-for="contact in contacts" :key="contact">
            {{ contact.keyContactName }}
          </option>
        </form-select>
      </div>
      <div class="contact-2">
        <!--
          add more contact dropdown
        -->
        <div />
        <div>
          <button class="underline" @click.prevent="moreContacts=false">
            {{ $t ('engSelect.remove') }}
          </button>
        </div>
      </div>
      <div class="flex flex-row mt-2">
        <button class="mr-4" @click.prevent="moreContacts=true">
          {{ $t ('engSelect.add') }}
        </button>
        <div class="pt-1">
          <span
            class="border border-solid border-black rounded-full h-5 w-5 flex items-center justify-center"
          >
            +
          </span>
        </div>
      </div>
    </form>
    <div v-if="isSelected === true">
      <div>
        <show-contacts
          :contact-name="contactName"
          :department="department"
          :contact-email="contactEmail"
          :last-eng-title="lastEngTitle"
          :engagement-date="engagementDate"
          :num-participants="numParticipants"
        />
      </div>
      <div>
        <button @click="isSelected=false">
          {{ $t ('engSelect.remove') }}
        </button>
      </div>
    </div>
    <!--
    <div v-if="isSelected2" class="show-contact2">
      display contact info here
      <button @click="isSelected2=false">
        {{ $t ('engSelect.remove') }}
      </button>
    </div>
    -->
  </div>
</template>

<script>
import formSelect from './EngFormSelect'
import showContacts from './EngShowContacts'
export default {
  components: {
    formSelect,
    showContacts
  },
  data() {
    return {
      contactName: 'Contact Name',
      department: 'Department',
      contactEmail: 'example@example.com',
      lastEngTitle: 'Engagement Title',
      engagementDate: new Date(),
      numParticipants: 0,
      contacts: [],
      moreContacts: false,
      isSelected: false
    }
  },
  // eslint-disable-next-line space-before-function-paren
  async created() {
    try {
      const res = await this.$axios.get('/api/contact/contacts')
      this.contacts = res.data
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('error : ', e.response)
      this.notification('error', e.response.data.message)
    }
  },
  methods: {
    showContact(event) {
      this.contactName = event.target.value
      let i
      for (i = 0; i < this.contacts.length; i++) {
        if (this.contactName === this.contacts[i].keyContactName) {
          this.department = this.contacts[i].department
          this.contactEmail = this.contacts[i].keyContactEmail
        }
      }
      this.isSelected = true
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
.orange {
  background-image: url('../../assets/images/orange-star.png');
  background-repeat: no-repeat;
  @apply mt-6 pl-6 pr-4 font-bold;
}

button {
  @apply font-bold text-lg
}

button:focus,
option:focus {
  @apply outline-none;
}
</style>
