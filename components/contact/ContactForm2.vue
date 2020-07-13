<template>
  <div class="contactForm font-body mt-8 ml-12">
    <div>
      <div v-if="didAttemptSubmit && invalidFields.length" class="error-list">
        <h1 ref="displayErrors" class="text-xl text-red-600">
          {{ $t('contactValidation.errorListTitle') }}
        </h1>
        <ul
          class="list-disc text-sm text-red-600 italic"
          style="list-style-position: inside"
        >
          <li v-for="invalidField in invalidFields" :key="invalidField">
            {{ $t('contact.' + invalidField) }}
          </li>
        </ul>
      </div>
      <h2 class="title font-display">
        {{ $t('contact.create') }}
      </h2>

      <div>
        <p class="orange font-body">
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
            <option value="International">
              {{ $t('contact.international') }}
            </option>
          </select>
        </div>
      </div>

      <h2 class="title font-display">
        {{ $t('contact.information') }}
      </h2>

      <form @submit.prevent="submitForm(contactInfo)">
        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactName">
              {{ $t('contact.keyContactName') }}
            </label>
            <input
              id="keyContactName"
              v-model="contactInfo.keyContactName"
              class="formInput"
              :class="{ 'form-error': $v.contactInfo.keyContactName.$error }"
              type="text"
              placeholder="name"
              @blur="$v.contactInfo.keyContactName.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.keyContactName.$dirty &&
                  !$v.contactInfo.keyContactName.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactTitle">
              {{ $t('contact.keyContactTitle') }}
            </label>
            <input
              id="keyContactTitle"
              v-model="contactInfo.keyContactTitle"
              class="formInput"
              type="text"
              placeholder="title"
              :class="{ 'form-error': $v.contactInfo.keyContactTitle.$error }"
              @blur="$v.contactInfo.keyContactTitle.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.keyContactTitle.$dirty &&
                  !$v.contactInfo.keyContactTitle.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="keyContactAddress">
              {{ $t('contact.keyContactAddress') }}
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
              {{ $t('contact.keyContactEmail') }}
            </label>
            <input
              id="keyContactEmail"
              v-model="contactInfo.keyContactEmail"
              class="formInput"
              type="text"
              placeholder="Email"
              :class="{ 'form-error': $v.contactInfo.keyContactEmail.$error }"
              @blur="$v.contactInfo.keyContactEmail.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.keyContactEmail.$dirty &&
                  !$v.contactInfo.keyContactEmail.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
            <p
              v-if="
                $v.contactInfo.keyContactEmail.$dirty &&
                  !$v.contactInfo.keyContactEmail.email
              "
              class="error"
            >
              {{ $t('contactValidation.invalidEmail') }}
            </p>
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="keyContactPhone">
              {{ $t('contact.keyContactPhone') }}
            </label>
            <input
              id="keyContactPhone"
              v-model="contactInfo.keyContactPhone"
              class="formInput"
              type="text"
              placeholder="999-999-9999"
              :class="{ 'form-error': $v.contactInfo.keyContactPhone.$error }"
              @blur="$v.contactInfo.keyContactPhone.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.keyContactPhone.$dirty &&
                  !$v.contactInfo.keyContactPhone.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
        </div>

        <h2 class="title font-display">
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
              :class="{ 'form-error': $v.contactInfo.orgAddress.$error }"
              @blur="$v.contactInfo.orgAddress.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.orgAddress.$dirty &&
                  !$v.contactInfo.orgAddress.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="orgAddress2">
              {{ $t('contact.address2') }}
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
            <label class="formLabel" for="keyContactCity">
              {{ $t('contact.city') }}
            </label>
            <input
              id="orgCity"
              v-model="contactInfo.orgCity"
              class="formInput"
              type="text"
              placeholder="City"
            />
          </div>
          <div class="w-5/12  margins">
            <label class="formLabel" for="keyContactCountry">
              {{ $t('contact.country') }}
            </label>
            <select
              id="orgCountry"
              v-model="contactInfo.orgCountry"
              class="formSelect"
              @change="onOrgCountry($event)"
            >
              <option value="Select" selected>
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
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="keyContactPostal">
              {{ $t('contact.postal') }}
            </label>
            <input
              id="orgPostalCode"
              v-model="contactInfo.orgPostalCode"
              class="formInput"
              type="text"
              placeholder="Postal Code"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="orgWebsite">
              {{ $t('contact.orgWebsite') }}
            </label>
            <input
              id="orgWebsite"
              v-model="contactInfo.orgWebsite"
              class="formInput"
              type="text"
              placeholder="Website"
              :class="{ 'form-error': $v.contactInfo.orgWebsite.$error }"
              @blur="$v.contactInfo.orgWebsite.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.orgWebsite.$dirty &&
                  !$v.contactInfo.orgWebsite.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
        </div>

        <div class="flex mb-4">
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
              <option selected value="Select">
                {{ $t('contact.selProvince') }}
              </option>
              <option value="AB">
                {{ $t('contact.ab') }}
              </option>
              <option value="BC">
                {{ $t('contact.bc') }}
              </option>
              <option value="MB">
                {{ $t('contact.mb') }}
              </option>
              <option value="NB">
                {{ $t('contact.nb') }}
              </option>
              <option value="NFL">
                {{ $t('contact.nfl') }}
              </option>
              <option value="NS">
                {{ $t('contact.ns') }}
              </option>
              <option value="ON">
                {{ $t('contact.on') }}
              </option>
              <option value="PEI">
                {{ $t('contact.pei') }}
              </option>
              <option value="QC">
                {{ $t('contact.qc') }}
              </option>
              <option value="SK">
                {{ $t('contact.sk') }}
              </option>
              <option value="NWT">
                {{ $t('contact.nwt') }}
              </option>
              <option value="NU">
                {{ $t('contact.nu') }}
              </option>
              <option value="YK">
                {{ $t('contact.yk') }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex mb-4">
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
              :class="{ 'form-error': $v.contactInfo.orgName.$error }"
              @blur="$v.contactInfo.orgName.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.orgName.$dirty &&
                  !$v.contactInfo.orgName.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel orange" for="orgSector">
              {{ $t('contact.orgSector') }}
            </label>
            <input
              id="orgSector"
              v-model="contactInfo.orgSector"
              class="formInput"
              type="text"
              placeholder="Sector"
              :class="{ 'form-error': $v.contactInfo.orgSector.$error }"
              @blur="$v.contactInfo.orgSector.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.orgSector.$dirty &&
                  !$v.contactInfo.orgSector.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
        </div>

        <div class="flex mb-4">
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
              :class="{ 'form-error': $v.contactInfo.orgEmail.$error }"
              @blur="$v.contactInfo.orgEmail.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.orgEmail.$dirty &&
                  !$v.contactInfo.orgEmail.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
            <p
              v-if="
                $v.contactInfo.orgEmail.$dirty && !$v.contactInfo.orgEmail.email
              "
              class="error"
            >
              {{ $t('contactValidation.invalidEmail') }}
            </p>
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
              :class="{ 'form-error': $v.contactInfo.orgPhone.$error }"
              @blur="$v.contactInfo.orgPhone.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.orgPhone.$dirty &&
                  !$v.contactInfo.orgPhone.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
        </div>

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
              :class="{ 'form-error': $v.contactInfo.department.$error }"
              @blur="$v.contactInfo.department.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.department.$dirty &&
                  !$v.contactInfo.department.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
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
              :class="{ 'form-error': $v.contactInfo.branch.$error }"
              @blur="$v.contactInfo.branch.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.branch.$dirty && !$v.contactInfo.branch.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
        </div>

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
              :class="{ 'form-error': $v.contactInfo.directorate.$error }"
              @blur="$v.contactInfo.directorate.$touch()"
            />
            <p
              v-if="
                $v.contactInfo.directorate.$dirty &&
                  !$v.contactInfo.directorate.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>

          <div class="w-5/12 margins">
            <label class="formLabel orange" for="provTerritory">
              {{ $t('contact.provTerritory') }}
            </label>
            <select
              id="provTerritory"
              v-model="contactInfo.provTerritory"
              class="formSelect"
              :class="{ 'form-error': $v.contactInfo.provTerritory.$error }"
              @change="onProvTerr($event)"
              @blur="$v.contactInfo.provTerritory.$touch()"
            >
              <option selected value="Select">
                {{ $t('contact.selProvince') }}
              </option>
              <option value="AB">
                {{ $t('contact.ab') }}
              </option>
              <option value="BC">
                {{ $t('contact.bc') }}
              </option>
              <option value="MB">
                {{ $t('contact.mb') }}
              </option>
              <option value="NB">
                {{ $t('contact.nb') }}
              </option>
              <option value="NFL">
                {{ $t('contact.nfl') }}
              </option>
              <option value="NS">
                {{ $t('contact.ns') }}
              </option>
              <option value="ON">
                {{ $t('contact.on') }}
              </option>
              <option value="PEI">
                {{ $t('contact.pei') }}
              </option>
              <option value="QC">
                {{ $t('contact.qc') }}
              </option>
              <option value="SK">
                {{ $t('contact.sk') }}
              </option>
              <option value="NWT">
                {{ $t('contact.nwt') }}
              </option>
              <option value="NU">
                {{ $t('contact.nu') }}
              </option>
              <option value="YK">
                {{ $t('contact.yk') }}
              </option>
            </select>
            <p
              v-if="
                $v.contactInfo.provTerritory.$dirty &&
                  !$v.contactInfo.provTerritory.required
              "
              class="error"
            >
              {{ $t('contactValidation.required') }}
            </p>
          </div>
        </div>

        <div class="flex mb-4">
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

        <div class="flex mb-4">
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
import { required, email } from 'vuelidate/lib/validators'
import AppButton from '@/components/app/AppButton.vue'

export default {
  name: 'ContactForm',

  components: {
    AppButton
  },

  async fetch() {
    try {
      this.$axios.defaults.baseURL = this.$config.API_URL
      await this.$axios
        .get(`/api/contact/contact?id=${this.$route.params.id}`)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response.data)
          this.contactInfo = response.data
        })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error fetching Contact : ', e)
    }
  },

  data() {
    return {
      message: {
        type: null,
        message: null
      },

      timeout: null,
      didAttemptSubmit: false,

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

  validations: {
    contactInfo: {
      type: { required },
      // Key Contact
      keyContactName: { required },
      keyContactTitle: { required },
      keyContactAddress: {},
      keyContactAddress2: {},
      keyContactCity: {},
      keyContactProvState: {},
      keyContactCountry: {},
      keyContactPostalCode: {},
      keyContactEmail: { required, email },
      keyContactPhone: { required },
      // Organization
      orgAddress: { required },
      orgAddress2: {},
      orgCity: {},
      orgProvState: {},
      orgCountry: {},
      orgPostalCode: {},
      orgName: { required },
      orgSector: { required },
      orgEmail: { required, email },
      orgPhone: { required },
      contributionRefNo: {},
      serviceContrNo: {},
      onStandingOffer: {},
      orgWebsite: { required },
      // Federal & Provincial
      department: { required },
      branch: { required },
      directorate: { required },
      provTerritory: { required }
    }
  },

  computed: {
    invalidFields() {
      return Object.keys(this.$v.contactInfo.$params).filter(
        // eslint-disable-next-line arrow-parens
        (fieldName) => this.$v.contactInfo[fieldName].$invalid
      )
    }
  },

  methods: {
    onProvTerr(event) {
      this.contactInfo.provTerritory = event.target.value
    },

    onStanding(event) {
      this.contactInfo.onStandingOffer = event.target.value
    },

    onOrgCountry(event) {
      this.contactInfo.orgCountry = event.target.value
    },

    onContactCountry(event) {
      this.contactInfo.keyContactCountry = event.target.value
    },

    onType(event) {
      this.contactInfo.type = event.target.value
    },

    notification(type, message) {
      this.message.type = type
      this.message.message = message
      this.timeout = setTimeout(() => this.clearMessage(), 5000)
    },

    clearMessage() {
      this.message.type = ''
      this.message.message = null
      clearTimeout(this.timeout)
    },

    goBack() {
      this.$router.back()
    },

    async submitForm(contactInfo) {
      this.$v.$touch()
      this.didAttemptSubmit = true
      if (this.$v.$invalid) {
        this.$nextTick(() => {
          this.$scrollTo(this.$refs.displayErrors)
        })
      } else {
        try {
          await this.$axios
            .post(`/api/contact/update?id=${this.$route.params.id}`, {
              contactInfo
            })
            .then(this.notification('success', 'contact updated'))
        } catch (e) {
          this.notification('error', e.response.data.message)
        }
      }
    }
  }
}
</script>

<style scoped>
.contactForm {
  width: 1200px;
  @apply bg-white text-black;
}
.title {
  font-size: 28pt;
  @apply text-rmp-md-blue font-display text-left tracking-wide font-extrabold text-4xl pt-4;
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
  @apply bg-green-100 border border-green-400 px-4 rounded text-center text-2xl font-medium mb-4 h-16 pt-3 min-h-0 mt-2 text-green-800;
}
/* .error {
  @apply bg-red-700;
} */
.error {
  @apply bg-red-100 border-red-400 text-red-700 text-sm italic;
}

.form-error {
  @apply appearance-none border border-red-500 rounded w-full;
}

.error-list {
  width: 50%;
  background-color: rgba(255, 0, 0, 0.1);
  @apply border border-red-500;
}
</style>
