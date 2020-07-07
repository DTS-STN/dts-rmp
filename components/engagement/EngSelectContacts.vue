<template>
  <div class="contact mb-8">
    <h2 class="text-4xl mt-12">
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
          <option selected="selected" disabled>
            {{ $t('engSelect.selectDefault') }}
          </option>
          <option v-for="contact in contacts" :key="contact">
            {{ contact.keyContactName }}
          </option>
        </form-select>
      </div>
      <div v-if="moreContacts === true" class="contact-2">
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
        <div class="mt-6">
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
        <display-contact
          :name="contactName"
          :org-name="orgName"
          :email="contactEmail"
          :type="engagementType"
          :date="engagementDate"
          :participants="participants"
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
import displayContact from '../app/AppDisplayContact'
import formSelect from './EngFormSelect'
export default {
  components: {
    formSelect,
    displayContact
  },
  data() {
    return {
      contactName: '',
      orgName: '',
      title: '',
      contactEmail: '',
      phoneNum: '',
      lastEngId: '',
      engagementType: '',
      engagementDate: new Date(),
      participants: 0,
      contacts: [],
      engagements: [],
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
    /* display contact info when select contact name in the dropdown menu */
    showContact(event) {
      this.contactName = event.target.value
      this.getContactInfo()
      this.isSelected = true
    },
    /* get contact and engagement information */
    getContactInfo() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contactName === this.contacts[i].keyContactName) {
          this.orgName = this.contacts[i].orgName
          this.contactEmail = this.contacts[i].keyContactEmail
          if (this.isEmpty(i)) {
            this.noLastEngagement()
          } else {
            this.engagementType = this.getLastEng(i).type
            this.engagementDate = this.getLastEng(i).date
            this.participants = this.getLastEng(i).participants
          }
        }
      }
    },
    /* return the last engagement in the contact list */
    getLastEng(index) {
      const last = (this.contacts[index].engagements.length - 1)
      return this.contacts[index].engagements[last]
    },
    /* check if engagement list is empty */
    isEmpty(index) {
      return this.contacts[index].engagements.length === 0
    },
    /* reset engagement title (type) to default */
    noLastEngagement() {
      this.engagementType = ''
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
