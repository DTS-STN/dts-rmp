<template>
  <!-- eslint-disable space-before-function-paren -->
  <div class="contactForm">
    <div>
      <h1 class="title">
        {{ $t('contact.create') }}
      </h1>

      <div>
        <p class="orange fontNoto">
          {{ $t('contact.type') }}
        </p>
      </div>

      <div class="flex mb-4">
        <div class="w-5/12 margins">
          <select
            v-model="contactInfo.type"
            class="formSelect"
            @change="onStanding($event)"
          >
            <option value="Federal">
              {{ $t('contact.federal') }}
            </option>
            <option value="External">
              {{ $t('contact.external') }}
            </option>
            <option value="Provincial">
              {{ $t('contact.provincial') }}
            </option>
          </select>
        </div>
      </div>

      <h2 class="title">
        {{ $t('contact.information') }}
      </h2>

      <form @submit.prevent="submitForm(contactInfo)">
        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactName">
              {{ $t('contact.name') }}
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
              {{ $t('contact.title') }}
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
              {{ $t('contact.address') }}
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
              {{ $t('contact.address2') }}
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
            <label class="formLabel" for="keyContactCity">
              {{ $t('contact.city') }}
            </label>
            <input
              id="keyContactCity"
              v-model="contactInfo.keyContactCity"
              class="formInput"
              type="text"
              placeholder="City"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="keyContactProv">
              {{ $t('contact.provState') }}
            </label>
            <input
              id="keyContactProv"
              v-model="contactInfo.keyContactProvState"
              class="formInput"
              type="text"
              placeholder="Province / State"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="keyContactCountry">
              {{ $t('contact.country') }}
            </label>
            <select
              id="keyContactCountry"
              v-model="contactInfo.keyContactCountry"
              class="formSelect"
              @change="onContactCountry($event)"
            >
              <option value="Select">
                {{ $t('contact.selCountry') }}
              </option>
              <option value="Canada">
                {{ $t('contact.canada') }}
              </option>
              <option value="Mexico">
                {{ $t('contact.mexico') }}
              </option>
              <option value="England">
                {{ $t('contact.england') }}
              </option>
            </select>
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="keyContactPostal">
              {{ $t('contact.postal') }}
            </label>
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
              {{ $t('contact.email') }}
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
              {{ $t('contact.phone') }}
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
          {{ $t('contact.organization') }} <br />
          {{ $t('contact.information') }}
        </h2>

        <!-- Next Div are shown as needed according to the Contact Type -->

        <div class="flex mb-4">
          <div class="w-5/12  margins">
            <label class="formLabel orange" for="orgAddress">
              {{ $t('contact.orgAddress') }}
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
                {{ $t('contact.selCountry') }}
              </option>
              <option value="Canada">
                {{ $t('contact.canada') }}
              </option>
              <option value="Mexico">
                {{ $t('contact.mexico') }}
              </option>
              <option value="England">
                {{ $t('contact.england') }}
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
            {{ $t('contact.orgwebsite') }}
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
                {{ $t('contact.department') }}
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
                {{ $t('contact.branch') }}
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

        <div
          v-if="
            contactInfo.type == 'Federal' || contactInfo.type == 'Provincial'
          "
        >
          <div class="flex mb-4">
            <div class="w-5/12 margins">
              <label class="formLabel orange" for="directorate">
                {{ $t('contact.directorate') }}
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
                {{ $t('contact.provTerr') }}
              </label>
              <select
                id="provTerritory"
                v-model="contactInfo.provTerritory"
                class="formSelect"
                @change="onProvTerr($event)"
              >
                <option value="Select">
                  {{ $t('contact.selProvince') }}
                </option>
                <option value="Ontario">
                  {{ $t('contact.on') }}
                </option>
                <option value="Ontario">
                  {{ $t('contact.qc') }}
                </option>
                <option value="Ontario">
                  {{ $t('contact.ns') }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div v-if="contactInfo.type != 'Federal'" class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="orgName">
              {{ $t('contact.orgName') }}
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
              {{ $t('contact.sector') }}
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
              {{ $t('contact.orgEmail') }}
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
              {{ $t('contact.orgPhone') }}
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

        <div v-if="contactInfo.type == 'External'" class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="contributionRefNo">
              {{ $t('contact.contrib') }}
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
              {{ $t('contact.service') }}
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

        <div v-if="contactInfo.type == 'External'" class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="onStandingOffer">
              {{ $t('contact.standing') }}
            </label>
            <select
              id="onStandingOffer"
              v-model="contactInfo.onStandingOffer"
              class="formSelect"
              @change="onStanding($event)"
            >
              <option value="false">
                {{ $t('contact.false') }}
              </option>
              <option value="true">
                {{ $t('contact.true') }}
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
              {{ $t('contact.cancel') }}
            </AppButton>
          </div>
          <div class="w-3/12 margins">
            <AppButton custom_style="btn-extra" data_cypress="formButton">
              {{ $t('contact.save') }}
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
        keyContactName: '',
        keyContactTitle: '',
        keyContactAddress: '2',
        keyContactAddress2: '',
        keyContactCity: '',
        keyContactProvState: '',
        keyContactCountry: '',
        keyContactPostalCode: '',
        keyContactEmail: '',
        keyContactPhone: '',
        // Organization
        orgAddress: '',
        orgAddress2: '',
        orgCity: '',
        orgProvState: '',
        orgCountry: '',
        orgPostalCode: '',
        orgWebsite: '',
        orgName: '',
        orgSector: '',
        orgEmail: '',
        orgPhone: '',
        contributionRefNo: 0,
        serviceContrNo: 0,
        onStandingOffer: false,
        // Federal & Provincial
        department: '',
        branch: '',
        directorate: '',
        provTerritory: ''
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
