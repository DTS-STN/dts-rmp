<template>
  <div ref="top" title="engagementForm" class="engagementForm font-body mx-2 xl:mx-16">
    <div v-if="attemptSubmit && invalidFields.length" ref="messageBox" class="error-list w-full md:w-1/2 mt-6">
      <h1 class="text-xl text-red-600">
        {{ $t('engagementValidation.messageTitle') }}
      </h1>
      <ul class="list-disc text-sm text-red-600 italic" style="list-style-position: inside">
        <li v-for="invalidField in invalidFields" :key="invalidField">
          {{ $t('engagement.' + invalidField) }}
        </li>
      </ul>
    </div>
    <div>
      <h1 class="formTitle font-display mt-8">
        {{ $t('engSelect.engagement') }}
      </h1>
      <h2 class="font-display mb-2 text-4xl">
        {{ $t('engSelect.contact') }}
      </h2>
      <select-contact
        :key="componentKey"
        @childToParent="onChildClick"
        @blur="$v.engagementDetail.contacts.$touch()"
      />
      <p v-if="$v.engagementDetail.contacts.$dirty && !$v.engagementDetail.contacts.required" class="error">
        {{ $t('engagementValidation.required') }}
      </p>
      <h2 class="title font-display mt-6">
        {{ $t('engagement.engagment') }}
      </h2>

      <form @submit.prevent="submitForm(engagementDetail)">
        <div class="md:flex flex-wrap mb-10 ">
          <div class="md:w-5/12 margins ">
            <label
              class="formLabel orange"
              for="subject"
            >
              {{ $t('engagement.subject') }}
            </label>
            <input
              id="subject"
              v-model="engagementDetail.subject"
              :placeholder="$t('engagement.typing')"
              class="formInput"
              type="text"
              :class="{invalid: $v.engagementDetail.subject.$error}"
              @blur="$v.engagementDetail.subject.$touch()"
            />
            <p v-if="$v.engagementDetail.subject.$dirty && !$v.engagementDetail.subject.required" class="error">
              {{ $t('engagementValidation.required') }}
            </p>
          </div>

          <div class="md:w-5/12 margins">
            <label
              class="formLabel orange"
              for="type"
            >
              {{ $t('engagement.type') }}
            </label>
            <select
              v-model="engagementDetail.type"
              class="formSelect"
              :class="{invalid: $v.engagementDetail.type.$error}"
              @blur="$v.engagementDetail.type.$touch()"
            >
              <option value="" disabled selected hidden>
                {{ $t('engagement.type') }}
              </option>
              <option
                v-for="engagementType in engagementTypes"
                :key="engagementType.type"
              >
                {{ engagementType.type }}
              </option>
            </select>
            <p v-if="$v.engagementDetail.type.$dirty && !$v.engagementDetail.type.required" class="error">
              {{ $t('engagementValidation.required') }}
            </p>
            <!-- <div
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
              </div> -->
          </div>
        </div>
        <div class="md:flex flex-wrap mb-10  ">
          <div class="md:w-5/12 margins ">
            <label
              class="formLabel orange"
              for="date"
            >
              {{ $t('engagement.date') }}
            </label>
            <div class="relative md:w-5/12 max-w-xs">
              <input
                :value="engagementDetail.date.toISOString().split('T')[0]"
                class="dateStyle"
                type="date"
                required="required"
                @input="engagementDetail.date = $event.target.valueAsDate"
                @blur="$v.engagementDetail.date.$touch()"
              />
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <img :src="mySVG" />
              </div>
            </div>
          </div>

          <div class="md:w-5/12 margins ">
            <label
              class="formLabel orange"
              for="numParticipants"
            >
              {{ $t('engagement.participants') }}
            </label>
            <div class="flex relative w-20 ">
              <input
                id="numParticipants"
                v-model="engagementDetail.numParticipants"
                class="numberIncrement"
                type="number"
                min="0"
                :class="{invalid: $v.engagementDetail.numParticipants.$error}"
                @blur="$v.engagementDetail.numParticipants.$touch()"
              />
            </div>
            <p v-if="$v.engagementDetail.numParticipants.$dirty && !$v.engagementDetail.numParticipants.minVal" class="error">
              {{ $t('engagementValidation.minParticipant') }}
            </p>
          </div>
        </div>

        <div class="md:w-4/6 margins mb-6">
          <label
            class="orange formLabel"
            for="description"
          >
            {{ $t('engagement.editDescription') }}
          </label>
          <br />
          <textarea
            v-model="engagementDetail.description"
            type="text"
            class="textArea"
            maxlength="1000"
            :class="{invalid: $v.engagementDetail.description.$error}"
            @blur="$v.engagementDetail.description.$touch()"
          />
          <p v-if="engagementDetail.description.length < 1000" class="limiter">
            {{ charactersLeftDescription }}
          </p>
          <p v-else class="text-red-500">
            {{ $t('engagementValidation.limit') }}
          </p>
          <p
            v-if="$v.engagementDetail.description.$dirty && !$v.engagementDetail.description.required"
            class="error"
          >
            {{ $t('engagementValidation.required') }}
          </p>
        </div>

        <div class="md:flex flex-wrap mb-10  ">
          <div class="md:w-5/12 margins ">
            <label
              class="formLabel"
              for="policyProgram"
            >
              {{ $t('engagement.policy') }}
            </label>
            <input
              id="policyProgram"
              v-model="engagementDetail.policyProgram"
              :placeholder="$t('engagement.typing')"
              class="formInput"
              type="text"
            />
          </div>

          <div class="md:w-6/12 margins ">
            <label
              class="formLabel"
              for="tags"
            >
              {{ $t('engagement.tags') }} <span class="text-xs font-normal">
                {{ $t('engagement.tagLabel') }}
              </span>
            </label>
            <div class="flex relative w-48">
              <input
                id="tags"
                v-model="inputTag"
                class="textInputTag"
                type="text"
                :class="{invalid: $v.inputTag.$error}"
                @input="$v.inputTag.$touch()"
                @keydown.enter.prevent="getTagFromInput()"
              />
            </div>
            <p v-if="$v.inputTag && !$v.inputTag.maxChar" class="error">
              {{ $t('engagementValidation.maxTagLength') }}
            </p>
            <p v-if="duplicateTags()" class="error">
              {{ $t('engagementValidation.duplicateTags') }}
            </p>
          </div>
          <div v-if="showTag" class="flex mt-6 ml-2">
            <eng-tags v-for="(tag, index) in engagementDetail.tags" :key="index">
              {{ tag }}
              <button class="delete-btn" @click.prevent="deleteTag(index)">
                x
              </button>
            </eng-tags>
          </div>
        </div>

        <div class="md:w-4/6 margins ">
          <label
            class="formLabel"
            for="comments"
          >
            {{ $t('engagement.editComments') }}
          </label>
          <br />
          <textarea
            v-model="comments"
            type="text"
            name="KeyNotes"
            class="textArea"
            maxlength="140"
          />
          <p v-if="comments.length < 140" class="limiter">
            {{ charactersLeftComment }}
          </p>
          <p v-else class="text-red-500">
            {{ $t('engagementValidation.limit') }}
          </p>
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
        <div class="md:flex flex-wrap justify-start mb-12">
          <div class=" margins">
            <AppButton class="font-display" custom_style="btn-cancel" btntype="button" data_cypress="formButton" @click="goBack">
              {{ $t('engagement.cancel') }}
            </AppButton>
          </div>
          <div class=" margins">
            <AppButton class="font-display" custom_style="btn-extra" data_cypress="formButton">
              {{ $t('engagement.save') }}
            </AppButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minValue, maxLength } from 'vuelidate/lib/validators'
import SelectContact from './EngSelectContacts.vue'
import EngTags from './EngTags'
import AppButton from '@/components/app/AppButton.vue'

export default {
  name: 'EngagementForm',
  components: {
    AppButton,
    SelectContact,
    EngTags
  },
  data() {
    return {
      mySVG: require('../../assets/images/calendar.svg'),
      idFromChild: [],
      componentKey: 0,
      message: {
        type: null,
        message: null,
        goBack: false
      },
      engagementDetail: this.resetForm(),
      comments: '',
      inputTag: '',
      engagementTypes: [
        { type: this.$t('engagementTypes.one') },
        { type: this.$t('engagementTypes.Conference') },
        { type: this.$t('engagementTypes.ConferenceCall') },
        { type: this.$t('engagementTypes.Workshop') },
        { type: this.$t('engagementTypes.Webinar') },
        { type: this.$t('engagementTypes.PhoneCall') },
        { type: this.$t('engagementTypes.CommitteeMeeting') },
        { type: this.$t('engagementTypes.WorkingGroup') },
        { type: this.$t('engagementTypes.SeniorManagementBriefing') },
        { type: this.$t('engagementTypes.MinisterOfficeBriefing') },
        { type: this.$t('engagementTypes.ScrumSprint') },
        { type: this.$t('engagementTypes.Advisory') }
      ],
      showTag: false,
      timeout: null,
      attemptSubmit: false
    }
  },
  validations: {
    engagementDetail: {
      subject: { required, maxChar: maxLength(50) },
      type: { required },
      date: { required },
      description: { required },
      numParticipants: { required, minVal: minValue(1) },
      contacts: { required },
      tags: { maxSize: maxLength(3) }
    },
    inputTag: { maxChar: maxLength(10) }
  },
  computed: {
    invalidFields() {
      return Object.keys(this.$v.engagementDetail.$params).filter(fieldName => this.$v.engagementDetail[fieldName].$invalid)
    },
    charactersLeftComment() {
      const char = this.comments.length
      const limit = 140

      return (limit - char) + ' / ' + limit + ' ' + this.$t('engagement.charactersCount')
    },
    charactersLeftDescription() {
      const char = this.engagementDetail.description.length
      const limit = 1000

      return (limit - char) + ' / ' + limit + ' ' + this.$t('engagement.charactersCount')
    }
  },
  methods: {
    onChildClick(value) {
      this.engagementDetail.contacts = value
    },
    getTagFromInput() {
      if (this.engagementDetail.tags.length === 3 || this.inputTag.length > 10 || this.inputTag.length === 0 || this.duplicateTags()) {
        return
      } else {
        this.engagementDetail.tags.push(this.inputTag)
      }
      this.inputTag = ''
      this.showTag = true
    },
    duplicateTags() {
      if (this.inputTag.length !== 0 && this.inputTag === this.engagementDetail.tags[0]) {
        return true
      } else if (this.inputTag === this.engagementDetail.tags[1]) {
        return true
      } else if (this.inputTag === this.engagementDetail.tags[2]) {
        return true
      } else {
        return false
      }
    },
    deleteTag(index) {
      this.engagementDetail.tags.splice(index, 1)
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
    },
    emptyContacts() {
      return (this.engagementDetail.contacts.length === 0)
    },
    goBack() {
      this.$router.back()
    },
    reloadComponent() {
      this.componentKey += 1
    },
    resetForm() {
      return {
        subject: '',
        type: '',
        date: new Date(),
        description: '',
        numParticipants: 0,
        contacts: [],
        policyProgram: '',
        comments: [{ content: '', date: new Date() }],
        tags: []
      }
    },
    async submitForm(engagementDetail) {
      this.$v.$touch()
      this.attemptSubmit = true
      if (this.$v.$invalid) {
        this.$nextTick(() => {
          this.$scrollTo(this.$refs.messageBox)
        })
      } else {
        this.engagementDetail.comments = []
        this.engagementDetail.comments.push({ content: this.comments, date: new Date() })
        try {
          await this.$axios.post('/api/engagement/addEngagement', {
            engagementDetail
          })
          this.$store.dispatch('notifications/addNotification', this.$t('notifications.ContactUpdated'))
          this.goBack()
          this.engagementDetail = this.resetForm()
          this.reloadComponent()
          this.attemptSubmit = false
        } catch (e) {
          this.notification('error', e.response.data.message)
        }
      }
    }
  }
}
</script>

<style scoped>
.engagementForm {
  @apply bg-white text-black;
}
.title {
  font-size: 28pt;
  @apply text-rmp-md-blue font-display text-left tracking-wide font-extrabold text-4xl pt-4;
}
.formTitle {
  font-weight: 600;
  font-size: 48px;
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold  pt-4;
}
.btn-extra {
  @apply w-full mt-2 h-12 justify-start;
}
.btn-cancel {
  @apply justify-start bg-gray-300 w-full mt-2 text-black h-12;
}
.formLabel {
  @apply font-bold;
}
.orange {
  background-image: url('../../assets/images/orange-star.png');
  background-repeat: no-repeat;
  @apply mt-6 pl-6 pr-4 font-bold;
}
.dateStyle {
  @apply appearance-none block w-full bg-white border-2  border-gray-400 rounded py-3 px-4 leading-tight;
}
.dateStyle:focus {
  @apply outline-none border-blue-500;
}
.margins {
  @apply py-2 mr-4 my-1;
}
.messageBox {
  @apply text-center text-2xl align-bottom mb-4 h-12 min-h-0 mt-2 text-black bg-green-700;
}
.numberIncrement {
  @apply appearance-none block w-full border-2 border-gray-400 rounded py-3 px-4 leading-tight;
}
.numberIncrement:focus {
  @apply outline-none border-blue-500;
}
.textArea {
  @apply w-full leading-relaxed appearance-none h-32 border-2 border-gray-400 rounded text-gray-900;
}
.textArea:focus {
  @apply outline-none border-blue-500;
}
.formSelect {
  @apply w-full border-2 bg-white border-gray-400 rounded;
}
.formselect:focus {
  @apply outline-none border-blue-500;
}
.formInput {
  @apply w-full appearance-none border-2 border-gray-400 rounded text-gray-900 leading-10;
}
.formInput:focus {
  @apply outline-none border-blue-500;
}
.textInputTag {
  @apply w-full appearance-none border-2 border-gray-400 rounded text-gray-900 leading-10;
}
.textInputTag:focus {
  @apply outline-none border-blue-500;
}
.delete-btn {
  @apply text-rmp-dk-blue bg-white rounded-full items-center justify-center pl-2 pr-2 ml-2
}
.margins {
  @apply py-2 mx-2 my-1;
}
.error {
  @apply text-red-500 text-xs italic;
}
.invalid {
  @apply appearance-none border border-red-500 rounded w-full
}
.error-list {
  background-color: rgba(255,0,0,0.1);
  @apply border border-red-500;
}
</style>
