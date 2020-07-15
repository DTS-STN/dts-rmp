<template>
  <div class="contactForm font-body mt-8 ml-12">
    <div>
      <div v-if="didAttemptSubmit && invalidFields.length" class="error-list">
        <h2 ref="displayErrors" class="text-xl ml-2 text-red-600">
          {{ $t('contactValidation.errorListTitle') }}
        </h2>
        <ul
          class="list-disc text-sm text-red-600 ml-2 italic"
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
        {{ $t('contact.contact') }}
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
              :placeholder="$t('contact.keyContactName')"
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
              :placeholder="$t('contact.keyContactTitle')"
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
              {{ $t('contact.address') }}
            </label>
            <input
              id="keyContactAddress"
              v-model="contactInfo.keyContactAddress"
              class="formInput"
              type="text"
              :placeholder="$t('contact.address')"
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
              :placeholder="$t('contact.address2')"
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
              :placeholder="$t('contact.city')"
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
              :placeholder="$t('contact.provState')"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="keyContactCountry">
              {{ $t('contact.country') }}
            </label>
            <input
              id="keyContactCountry"
              v-model="contactInfo.keyContactCountry"
              class="formInput"
              type="text"
              :placeholder="$t('contact.country')"
            />
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
              :placeholder="$t('contact.postal')"
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
              :placeholder="$t('contact.keyContactEmail')"
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
            <label class="formLabel" for="keyContactPhone">
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

        <h2 class="title font-display">
          {{ $t('contact.organization') }}
        </h2>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="orgName">
              {{ $t('contact.orgName') }}
            </label>
            <input
              id="orgName"
              v-model="contactInfo.orgName"
              class="formInput"
              type="text"
              :placeholder="$t('contact.orgName')"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="orgWebsite">
              {{ $t('contact.orgWebsite') }}
            </label>
            <input
              id="orgWebsite"
              v-model="contactInfo.orgWebsite"
              class="formInput"
              type="text"
              :placeholder="$t('contact.orgWebsite')"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12  margins">
            <label class="formLabel" for="orgAddress">
              {{ $t('contact.address') }}
            </label>
            <input
              id="orgAddress"
              v-model="contactInfo.orgAddress"
              class="formInput"
              type="text"
              :placeholder="$t('contact.address')"
            />
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
              :placeholder="$t('contact.address2')"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12  margins">
            <label class="formLabel" for="orgCity">
              {{ $t('contact.city') }}
            </label>
            <input
              id="orgCity"
              v-model="contactInfo.orgCity"
              class="formInput"
              type="text"
              :placeholder="$t('contact.city')"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="orgProvState">
              {{ $t('contact.provState') }}
            </label>
            <input
              id="orgProvState"
              v-model="contactInfo.orgProvState"
              class="formInput"
              type="text"
              :placeholder="$t('contact.provState')"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12  margins">
            <label class="formLabel" for="orgCountry">
              {{ $t('contact.country') }}
            </label>
            <input
              id="keyContactCountry"
              v-model="contactInfo.orgCountry"
              class="formInput"
              type="text"
              :placeholder="$t('contact.country')"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="keyContactPostal">
              {{ $t('contact.postal') }}
            </label>
            <input
              id="orgPostalCode"
              v-model="contactInfo.orgPostalCode"
              class="formInput"
              type="text"
              :placeholder="$t('contact.postal')"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="orgEmail">
              {{ $t('contact.orgEmail') }}
            </label>
            <input
              id="orgEmail"
              v-model="contactInfo.orgEmail"
              class="formInput"
              type="text"
              :placeholder="$t('contact.orgEmail')"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="orgPhone">
              {{ $t('contact.phone') }}
            </label>
            <input
              id="orgPhone"
              v-model="contactInfo.orgPhone"
              class="formInput"
              type="text"
              placeholder="999-999-9999"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="department">
              {{ $t('contact.department') }}
            </label>
            <input
              id="department"
              v-model="contactInfo.department"
              class="formInput"
              type="text"
              :placeholder="$t('contact.department')"
            />
          </div>
          <div class="w-5/12 margins">
            <label class="formLabel" for="branch">
              {{ $t('contact.branch') }}
            </label>
            <input
              id="branch"
              v-model="contactInfo.branch"
              class="formInput"
              type="text"
              :placeholder="$t('contact.branch')"
            />
          </div>
        </div>

        <div class="flex mb-4">
          <div class="w-5/12 margins">
            <label class="formLabel" for="directorate">
              {{ $t('contact.directorate') }}
            </label>
            <input
              id="directorate"
              v-model="contactInfo.directorate"
              class="formInput"
              type="text"
              :placeholder="$t('contact.directorate')"
            />
          </div>

          <div class="w-5/12 margins">
            <label class="formLabel" for="provTerritory">
              {{ $t('contact.provTerritory') }}
            </label>
            <select
              id="provTerritory"
              v-model="contactInfo.provTerritory"
              class="formSelect"
              @change="onProvTerr($event)"
            >
              <option disabled value="">
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
          <div class=" w-auto margins">
            <label class="formLabel" for="orgSector">
              {{ $t('contact.orgSector') }}
            </label>
            <select
              id="orgSector"
              v-model="contactInfo.orgSector"
              class="formSelect"
              @change="onSector($event)"
            >
              <option disabled value="">
                {{ $t('contact.selSector') }}
              </option>
              <option value="notProfit">
                {{ $t('contact.notProfit') }}
              </option>
              <option value="forProfit">
                {{ $t('contact.forProfit') }}
              </option>
              <option value="provGovCoorp">
                {{ $t('contact.provGovCoorp') }}
              </option>
              <option value="fedGovDept">
                {{ $t('contact.fedGovDept') }}
              </option>
            </select>
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
              :placeholder="$t('contact.contrib')"
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
              :placeholder="$t('contact.service')"
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
                {{ $t('contact.no') }}
              </option>
              <option value="true">
                {{ $t('contact.yes') }}
              </option>
            </select>
          </div>
        </div>

        <div
          v-if="message.message != null"
          class="messageBox text-lg"
          :class="[message.type == 'error' ? ' error' : ' ']"
        >
          <span>
            {{ message.message }}
          </span>
        </div>

        <div class="flex justify-start mb-4">
          <div class="w-3/12 margins">
            <AppButton custom_style="btn-cancel" data_cypress="cancelButton" type="button" @click="goBack">
              {{ $t('contact.cancel') }}
            </AppButton>
          </div>
          <div class="w-3/12 margins">
            <AppButton custom_style="btn-extra" data_cypress="submitButton">
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

  data() {
    return {
      message: {
        type: null,
        message: null,
        goBack: false
      },

      timeout: null,
      didAttemptSubmit: false,

      contactInfo: {
        type: 'Federal',
        // Key Contact
        keyContactName: '',
        keyContactTitle: '',
        keyContactAddress: '',
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
      keyContactPhone: { },
      // Organization
      orgAddress: { },
      orgAddress2: {},
      orgCity: {},
      orgProvState: {},
      orgCountry: {},
      orgPostalCode: {},
      orgName: { },
      orgSector: { },
      orgEmail: { },
      orgPhone: { },
      contributionRefNo: {},
      serviceContrNo: {},
      onStandingOffer: {},
      orgWebsite: { },
      // Federal & Provincial
      department: { },
      branch: { },
      directorate: { },
      provTerritory: { }
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

    onSector(event) {
      this.contactInfo.orgSector = event.target.value
    },

    onType(event) {
      this.contactInfo.type = event.target.value
    },

    notification(type, message) {
      this.message.type = type
      this.message.message = message
      this.message.goBack = (type === 'error')
      this.timeout = setTimeout(() => this.clearMessage(), 5000)
    },

    clearMessage() {
      this.message.type = ''
      this.message.message = null
      clearTimeout(this.timeout)
      if (!this.message.goBack) {
        this.message.goBack = false
        this.goBack()
      }
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
          await this.$axios.post('/api/contact/addContact', {
            contactInfo
          })
          this.notification('success', 'contact created')
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
  font-size: 18px !important;
  @apply bg-green-100 border border-green-400 px-4 rounded text-center font-medium mb-4 h-16 pt-3 min-h-0 mt-2 text-green-800;
}
/* .error {
  @apply bg-red-700;
} */
.error {
  @apply bg-red-100 border-red-400 text-red-700 text-xs italic;
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
