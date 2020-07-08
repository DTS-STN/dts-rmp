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
      <div>
        <select class="formSelect contactMenu" @change="showContact($event)">
          <option value="" disabled selected hidden>
            {{ $t('engagement.selectContact') }}
          </option>
          <option v-for="contact in contacts" :key="contact._id">
            {{ contact.keyContactName }}
          </option>
        </select>
      </div>
      <div class="btn-add flex flex-row mt-2">
        <button class="mr-4" @click.prevent="moreContacts=true">
          {{ $t ('engSelect.add') }}
        </button>
        <div class="mt-1">
          <span
            class="plus"
          >
            +
          </span>
        </div>
      </div>
    </form>
    <div v-if="isSelected === true">
      <div class="mt-4">
        <show-contact
          :name="contactName"
          :orgname="orgName"
          :title="title"
          :phone="phoneNum"
          :email="contactEmail"
          :last="engagementType"
          :date="engagementDate"
          :number="participants"
        />
      </div>
      <div>
        <button @click="isSelected=false">
          {{ $t ('engSelect.remove') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import showContact from './EngShowContacts'
export default {
  components: {
    showContact
  },
  async fetch() {
    try {
      await this.$store.dispatch('contacts/fetchContacts')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error: ', e.response)
    }
  },
  data() {
    return {
      contactName: '',
      orgName: '',
      title: '',
      contactEmail: '',
      phoneNum: '',
      engagementType: '',
      engagementDate: '',
      participants: 0,
      moreContacts: false,
      isSelected: false
    }
  },
  computed: mapState({
    contacts: state => state.contacts.contacts
  }),
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
          this.title = this.contacts[i].keyContactTitle
          this.phoneNum = this.contacts[i].keyContactPhone
          this.contactEmail = this.contacts[i].keyContactEmail
          if (this.isEmpty(i)) {
            this.noLastEngagement()
          } else {
            this.engagementType = this.getLastEng(i).type
            this.engagementDate = this.getLastEng(i).date
            this.participants = this.getLastEng(i).numParticipants
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
      this.engagementType = 'No engagement found'
      this.engagementDate = 'yyyy/mm/dd'
      this.participants = 0
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  @apply text-rmp-md-blue font-bold;
}
#contacts {
  @apply w-full cursor-pointer border border-black border-solid text-gray-700 py-3 px-4 pr-8 rounded leading-tight;
}
.add-contact {
  padding-top: 20px;
  @apply underline border-none bg-white;
}
.plus {
  @apply border text-rmp-orange bg-white rounded-full h-5 w-5 flex items-center justify-center
}
.btn-add {
  @apply w-56 text-white bg-rmp-orange p-3 rounded-full items-center
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
.contactMenu {
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
</style>
