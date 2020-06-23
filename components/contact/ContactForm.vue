<template>
  <!-- eslint-disable space-before-function-paren -->
  <div class="contactForm">
    <div v-if="title">
      <h1 class="title">
        {{ title }}
      </h1>

      <div>
        <p class="orange fontNoto">
          Contact type
        </p>
      </div>

      <div class="flex mb-4">
        <div class="w-5/12 margins">
          <select v-model="contactInfo.type" class="formSelect" @change="onStanding($event)">
            <option value="Federal">
              Federal
            </option>
            <option value="External">
              External
            </option>
            <option value="Provincial">
              Provincial
            </option>
          </select>
        </div>
      </div>

      <h2 class="title">
        Contact Information
      </h2>

      <form @submit.prevent="submitForm(contactInfo)">
        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactName">
              Full Name
            </label>
            <input
              id="keyContactName"
              v-model="contactInfo.keyContactName"
              class="formInput"
              type="text"
              placeholder="name"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactTitle">
              Title
            </label>
            <input
              id="keyContactTitle"
              v-model="contactInfo.keyContactTitle"
              class="formInput"
              type="text"
              placeholder="title"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactAddress">
              Address
            </label>
            <input
              id="keyContactAddress"
              v-model="contactInfo.keyContactAddress"
              class="formInput"
              type="text"
              placeholder="Street"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="keyContactAddress2">
              &nbsp;
            </label>
            <input
              id="keyContactAddress2"
              v-model="contactInfo.keyContactAddress2"
              class="formInput"
              type="text"
              placeholder="Street"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <input
              id="keyContactAddress"
              v-model="contactInfo.keyContactCity"
              class="formInput"
              type="text"
              placeholder="City"
            />
          </div>
          <div class="w-5/12 margins">
            <input
              id="keyContactEmail"
              v-model="contactInfo.keyContactProvState"
              class="formInput"
              type="text"
              placeholder="Province / State"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <select
              id="keyContactCountry"
              v-model="contactInfo.keyContactCountry"
              class="formSelect"
              @change="onContactCountry($event)"
            >
              <option value="Select">
                Select a country
              </option>
              <option value="Canada">
                Canada
              </option>
            </select>
          </div>
          <div class="w-5/12 margins">
            <input
              id="keyContactPostalCode"
              v-model="contactInfo.keyContactPostalCode"
              class="formInput"
              type="text"
              placeholder="Postal code"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactEmail">
              Email
            </label>
            <input
              id="keyContactEmail"
              v-model="contactInfo.keyContactEmail"
              class="formInput"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactPhone">
              Phone
            </label>
            <input
              id="keyContactPhone"
              v-model="contactInfo.keyContactPhone"
              class="formInput"
              type="text"
              placeholder="999-999-9999"
            />
          </div>
        </div>

        <h2 class="title">
          Organization <br />Information
        </h2>

        <!-- Next Div are shown as needed according to the Contact Type -->

        <div class="flex mb-4">
          <div class="w-5/12  margins">
            <label class="formLabel orange" for="orgAddress">
              Organization Address
            </label>
            <input
              id="orgAddress"
              v-model="contactInfo.orgAddress"
              class="formInput"
              type="text"
              placeholder="Address"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="orgAddress2">
              &nbsp;
            </label>
            <input
              id="orgAddress2"
              v-model="contactInfo.orgAddress2"
              class="formInput"
              type="text"
              placeholder="Adress"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12  margins">
            <input
              id="orgCity"
              v-model="contactInfo.orgCity"
              class="formInput"
              type="text"
              placeholder="City"
            />
          </div>
          <div class="w-5/12 margins">
            <input
              id="orgProvState"
              v-model="contactInfo.orgProvState"
              class="formInput"
              type="text"
              placeholder="Province / State"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12  margins">
            <select
              id="orgCountry"
              v-model="contactInfo.orgCountry"
              class="formSelect"
              @change="onOrgCountry($event)"
            >
              <option value="Select">
                Select a country
              </option>
              <option value="Mexico">
                Mexico
              </option>
            </select>
          </div>
          <div class="w-5/12 margins">
            <input
              id="orgPostalCode"
              v-model="contactInfo.orgPostalCode"
              class="formInput"
              type="text"
              placeholder="Postal Code"
            />
          </div>
        </div>

        <div class="w-5/12 margins">
          <label class="formLabel orange" for="orgWebsite">
            Organization Website
          </label>
          <input
            id="orgWebsite"
            v-model="contactInfo.orgWebsite"
            class="formInput"
            type="text"
            placeholder="Website"
          />
        </div>

        <div v-if="contactInfo.type == 'Federal'">
          <div class="flex mb-4">
            <div class="w-5/12 margins">
              <label class="formLabel orange" for="department">
                Department
              </label>
              <input
                id="department"
                v-model="contactInfo.department"
                class="formInput"
                type="text"
                placeholder="Department"
              />
            </div>
            <div class="w-5/12 margins">
              <label class="formLabel orange" for="branch">
                Branch
              </label>
              <input
                id="branch"
                v-model="contactInfo.branch"
                class="formInput"
                type="text"
                placeholder="Branch"
              />
            </div>
          </div>
        </div>

        <div v-if="contactInfo.type == 'Federal' || contactInfo.type == 'Provincial'">
          <div class="flex mb-4">
            <div class="w-5/12 margins">
              <label class="formLabel orange" for="directorate">
                Directorate
              </label>
              <input
                id="directorate"
                v-model="contactInfo.directorate"
                class="formInput"
                type="text"
                placeholder="Directorate"
              />
            </div>

            <div v-if="contactInfo.type == 'Provincial'" class="w-5/12 margins">
              <label class="formLabel orange" for="provTerritory">
                Province / Territory / Indigenous
              </label>
              <select
                id="provTerritory"
                v-model="contactInfo.provTerritory"
                class="formSelect"
                @change="onProvTerr($event)"
              >
                <option value="Select">
                  Select a province
                </option>
                <option value="Ontario">
                  Ontario
                </option>
              </select>
            </div>
          </div>
        </div>

        <div v-if="contactInfo.type != 'Federal'" class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="orgName">
              Organization Name
            </label>
            <input
              id="orgName"
              v-model="contactInfo.orgName"
              class="formInput"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="orgSector">
              Organization Sector
            </label>
            <input
              id="orgSector"
              v-model="contactInfo.orgSector"
              class="formInput"
              type="text"
              placeholder="Sector"
            />
          </div>
        </div>

        <div v-if="contactInfo.type != 'Federal'" class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="orgEmail">
              Organization Email
            </label>
            <input
              id="orgEmail"
              v-model="contactInfo.orgEmail"
              class="formInput"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="orgPhone">
              Organization Phone
            </label>
            <input
              id="orgPhone"
              v-model="contactInfo.orgPhone"
              class="formInput"
              type="text"
              placeholder="Phone"
            />
          </div>
        </div>

        <div v-if=" contactInfo.type == 'External' " class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="contributionRefNo">
              Contribution Agreement Reference
            </label>
            <input
              id="contributionRefNo"
              v-model="contactInfo.contributionRefNo"
              class="formInput"
              type="text"
              placeholder="Contribution"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="serviceContrNo">
              Service Contract
            </label>
            <input
              id="serviceContrNo"
              v-model="contactInfo.serviceContrNo"
              class="formInput"
              type="text"
              placeholder="Service Contract"
            />
          </div>
        </div>

        <div v-if="contactInfo.type == 'External' " class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="onStandingOffer">
              On standing offer list
            </label>
            <select
              id="onStandingOffer"
              v-model="contactInfo.onStandingOffer"
              class="formSelect"
              @change="onStanding($event)"
            >
              <option value="">
                Select one
              </option>
              <option value="true">
                true
              </option>
              <option value="false">
                false
              </option>
            </select>
          </div>
        </div>

        <div
          v-if="message.message != null"
          class="messageBox"
          :class="[message.type == 'error' ? ' error' : ' ']"
        >
          <span>
            {{ message.message }}
          </span>
        </div>

        <div class="flex justify-start mb-4">
          <div class="w-3/12 margins">
            <AppButton custom_style="btn-cancel" data_cypress="formButton">
              Cancel
            </AppButton>
          </div>
          <div class="w-3/12 margins">
            <AppButton custom_style="btn-extra" data_cypress="formButton">
              Save
            </AppButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import ContactForm from '@/components/contact/ContactForm.vue'
import AppButton from '@/components/app/AppButton.vue'

export default {
  name: 'ContactForm',

  components: {
    AppButton
  },

  props: {
    title: {
      type: String,
      required: true
    }
  },

  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      message: {
        type: null,
        message: null
      },

      timeout: null,

      contactInfo: {
        type: 'Federal',
        // Key Contact
        keyContactName: 'Marco',
        keyContactTitle: 'dev',
        keyContactAddress: '22 Eddy st',
        keyContactAddress2: '',
        keyContactCity: 'Gatineau',
        keyContactProvState: 'Quebec',
        keyContactCountry: 'Canada',
        keyContactPostalCode: 'J3H 3T5',
        keyContactEmail: 'm@m.com',
        keyContactPhone: '613-999-9999',
        // Organization
        orgAddress: 'Paseo de la Reforma #2829',
        orgAddress2: 'Col Roma',
        orgCity: 'Mexico city',
        orgProvState: 'Mexico city',
        orgCountry: 'Mexico',
        orgPostalCode: '86474',
        orgWebsite: 'canada.com',
        orgName: 'ESDC',
        orgSector: 'public',
        orgEmail: 'm@canada.com',
        orgPhone: '613-999-9999',
        contributionRefNo: 7363366373,
        serviceContrNo: 837666630,
        onStandingOffer: true,
        // Federal & Provincial
        department: 'ESDC',
        branch: 'ITTB',
        directorate: 'Who knows',
        provTerritory: 'Ontario'
      }
    }
  },

  methods: {
    // eslint-disable-next-line space-before-function-paren
    onProvTerr2(event) {
      // eslint-disable-next-line no-console
      console.log('prov terr 2 = ', event.target.value)
      this.contactInfo.provTerritory = event.target.value
    },
    // eslint-disable-next-line space-before-function-paren
    onProvTerr(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.value)
      this.contactInfo.provTerritory = event.target.value
    },
    // eslint-disable-next-line space-before-function-paren
    onStanding(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.value)
      this.contactInfo.onStandingOffer = event.target.value
    },
    // eslint-disable-next-line space-before-function-paren
    onOrgCountry(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.value)
      this.contactInfo.orgCountry = event.target.value
    },
    // eslint-disable-next-line space-before-function-paren
    onContactCountry(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.value)
      this.contactInfo.keyContactCountry = event.target.value
    },
    // eslint-disable-next-line space-before-function-paren
    onType(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.value)
      this.contactInfo.type = event.target.value
    },

    // eslint-disable-next-line space-before-function-paren
    notification(type, message) {
      this.message.type = type
      this.message.message = message
      this.timeout = setTimeout(() => this.clearMessage(), 5000)
    },

    // eslint-disable-next-line space-before-function-paren
    clearMessage() {
      this.message.type = ''
      this.message.message = null
      clearTimeout(this.timeout)
    },

    // eslint-disable-next-line space-before-function-paren
    async submitForm(contactInfo) {
      try {
        await this.$axios.post('/api/contact/addContact', {
          contactInfo
        })
        this.notification('success', 'contact created')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('error : ', e.response)
        this.notification('error', e.response.data.message)
      }
    }
  }
}
</script>

<style scoped>
.contactForm {
  width: 1200px;
  margin: auto;
  font-family: 'DejaVu Serif', 'Roboto slab', 'sans-serif', 'Helvetica Neue';
  @apply bg-white text-black;
}
.title {
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold text-4xl pt-4;
}
.formLabel {
  @apply font-bold;
}
.formInput {
  @apply w-full appearance-none border-2 border-gray-400 rounded text-gray-900 leading-10;
}
.formInput:focus {
  @apply outline-none border-blue-500;
}
.fontNoto {
  font-family: 'Noto Sans', 'DejaVu Serif', 'Roboto slab', 'sans-serif',
    'Helvetica Neue';
}
.orange {
  background-image: url('../../assets/images/orange-star.png');
  background-repeat: no-repeat;
  @apply mt-6 pl-6 pr-4 font-bold;
}
.formSelect {
  @apply w-full h-12 border-2 bg-white border-gray-400 rounded;
}
.formselect:focus {
  @apply outline-none border-blue-500;
}
.margins {
  @apply px-1 py-2 m-2;
}
.btn-cancel {
  @apply justify-start bg-gray-300 w-11/12 text-black h-12;
}
.btn-extra {
  @apply w-11/12 h-12 justify-start;
}
.messageBox {
  @apply text-center text-2xl align-bottom mb-4 h-12 min-h-0 mt-2 text-black bg-green-700;
}
.error {
  @apply bg-red-700;
}
</style>
