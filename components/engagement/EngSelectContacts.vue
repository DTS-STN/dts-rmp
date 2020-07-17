<template>
  <div class="contact">
    <div class="relative mt-6 max-w-md">
      <label
        class="orange block tracking-wide text-black text-md font-bold mb-2"
        for="subject"
      >
        {{ $t('engagement.contactName') }}
      </label>
      <div>
        <form-select v-model="selected" @click="selected = undefined" @input="showContact($event)">
          <option value="" selected="selected" disabled hidden>
            {{ $t('engagement.selectContact') }}
          </option>
          <option v-for="contact in contacts" :key="contact._id">
            {{ contact.keyContactName }}
          </option>
        </form-select>
      </div>
    </div>
    <p v-if="showDuplicate" class="error">
      {{ $t('engagementValidation.duplicateContacts') }}
    </p>
    <div v-if="isSelected === true">
      <div class="mt-4">
        <show-contact
          v-for="(contactList, index) in contactArray"
          :key="contactList._id"
          :name="contactList.name"
          :orgname="contactList.orgName"
          :email="contactList.email"
          :subject="contactList.subject"
          :date="contactList.date.substring(0, 10)"
          :number="contactList.participants"
          :array-index="index"
          @childToParent="onChildClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import showContact from './EngSelectedContact'
import formSelect from './EngFormSelect'
export default {
  components: {
    showContact,
    formSelect
  },

  props: {
    contactProps: {
      type: Array,
      default() {
        return []
      }
    }
  },

  /* fetch data from vuex store */
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
      showDuplicate: false,
      item: [],
      contactArrayId: [],
      contactArray: [],
      isSelected: false,
      selected: undefined
    }
  },
  computed: mapState({
    contacts: state => state.contacts.contacts
  }),

  created() {
    this.contactProps.forEach(contact => this.showContact(contact, true))
  },

  methods: {
    /* display contact info when select contact name in the dropdown menu */
    showContact(event, fromProps) {
      if (fromProps) {
        this.contactName = event.keyContactName
        this.items = []
        this.getContactInfo()
        this.isSelected = true
      } else {
        this.contactName = event.target.value
        this.items = this.contactArray.filter(item => item.name.includes(this.contactName))
        if (this.items.length === 0) {
          this.showDuplicate = false
          this.getContactInfo()
          this.isSelected = true
        } else {
          this.showDuplicate = true
        }
      }
    },
    /* get contact and engagement information */
    getContactInfo() {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contactName === this.contacts[i].keyContactName) {
          this.id = this.contacts[i]._id
          this.keyName = this.contacts[i].keyContactName
          this.orgName = this.contacts[i].orgName
          this.title = this.contacts[i].keyContactTitle
          this.phoneNum = this.contacts[i].keyContactPhone
          this.contactEmail = this.contacts[i].keyContactEmail
          if (this.isEmpty(i)) {
            this.noLastEngagement()
          } else {
            this.engagementSubject = this.getLastEng(i).subject
            this.engagementDate = this.getLastEng(i).date
            this.participants = this.getLastEng(i).numParticipants
            this.contactArray.push({
              objectId: this.id,
              name: this.keyName,
              orgName: this.orgName,
              title: this.title,
              phone: this.phoneNum,
              email: this.contactEmail,
              subject: this.engagementSubject,
              date: this.engagementDate,
              participants: this.participants
            })
            this.contactArrayId.push(
              this.id
            )
            this.emitToEngForm()
          }
        }
      }
    },
    /* return the latest engagement in the contact list */
    getLastEng(index) {
      const selectedContact = this.contacts[index].engagements
      const mostRecentDate = new Date(Math.max.apply(null, selectedContact.map((e) => {
        return new Date(e.date)
      })))
      const mostRecentObject = selectedContact.filter((e) => {
        const d = new Date(e.date)
        return d.getTime() === mostRecentDate.getTime()
      })[0]
      return mostRecentObject
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
      this.contactArray.push({
        objectId: this.id,
        name: this.keyName,
        orgName: this.orgName,
        title: this.title,
        phone: this.phoneNum,
        email: this.contactEmail,
        type: this.engagementType,
        date: this.engagementDate,
        participants: this.participants
      })
      this.contactArrayId.push(
        this.id
      )
      this.emitToEngForm()
    },
    /* this method will get the index num of the chosen one from the child component and passes the index num to be deleted on the parent class */
    onChildClick(value) {
      this.fromChild = value
      this.contactArray.splice(value, 1)
      this.contactArrayId.splice(value, 1)
      this.emitToEngForm()
    },
    /* this will pass all the contacts saved in contactarray to the parent EngForm to be prepare to submit to the db */
    emitToEngForm() {
      this.items.splice(0, this.items.length)
      this.$emit('childToParent', this.contactArrayId)
    },
    validDate(date) {
      const today = new Date()
      const day = today.getDate()
      const month = today.getMonth() + 1
      const year = today.getFullYear()
      if (date.getDate() < day && (date.getMonth() + 1) > month && date.getFullYear() > year) {
        return true
      } else if ((date.getMonth() + 1) > month && date.getFullYear() > year) {
        return true
      } else if (date.getFullYear() > year) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
h1 {
  padding-bottom: 50px;
}
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
.error {
  @apply text-red-500 text-xs italic;
}
</style>
