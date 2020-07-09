<template>
  <div title="engagementForm" class="ml-12">
    <h1 class="formTitle font-display mt-8">
      {{ $t('engSelect.engagement') }}
    </h1>
    <select-contact />
    <h1 class="title font-display">
      {{ $t('engagement.engagment') }}
    </h1>
    <form @submit.prevent="submitForm(engagementDetail)">
      <div class="w-full">
        <div class="flex flex-wrap mb-8">
          <div class="max-w-lg sm:w-1/3 mb-4 mr-20">
            <label
              class="orange block tracking-wide text-black text-md font-bold font-body mb-2"
              for="subject"
            >
              {{ $t('engagement.subject') }}
            </label>
            <input
              id="subject"
              v-model="engagementDetail.subject"
              :placeholder="$t('engagement.typing')"
              class="textInput"
              type="text"
            />
          </div>

          <div class="max-w-lg sm:w-1/3 mb-4">
            <label
              class="orange block tracking-wide text-black text-md font-bold font-body mb-2"
              for="type"
            >
              {{ $t('engagement.type') }}
            </label>
            <div class="relative max-w-md">
              <select
                v-model="engagementDetail.type"
                class="textInput bg-white"
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
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mb-8">
          <div class="max-w-lg w-2/3 mb-4 mr-20">
            <label
              class="orange block tracking-wide text-black text-md font-bold font-body mb-2"
              for="date"
            >
              {{ $t('engagement.date') }}
            </label>
            <div class="relative max-w-xs">
              <input
                :value="engagementDetail.date && engagementDetail.date.toISOString().split('T')[0]"
                placeholder="yyyy-mm-dd"
                class="dateStyle"
                type="date"
                @input="engagementDetail.date = $event.target.valueAsDate"
              />
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <img :src="mySVG" />
              </div>
            </div>
          </div>

          <div class="max-w-lg sm:w-1/3 mb-4">
            <label
              class="orange block tracking-wide text-black text-md font-bold font-body mb-2"
              for="numParticipants"
            >
              {{ $t('engagement.participants') }}
            </label>
            <div class="flex relative w-20 ">
              <input
                id="numParticipants"
                v-model="engagementDetail.numParticipants"
                class="numberIncrement"
                type="text"
              />
              <div class="flex flex-col absolute inset-y-0 right-0 items-center px-2">
                <button class="items-end" @click.prevent="increment">
                  +
                </button>
                <button class="items-end" @click.prevent="decrement">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-6/12 mb-8">
            <label
              class="orange block tracking-wide text-black text-md font-bold font-body mb-4"
              for="description"
            >
              {{ $t('engagement.description') }}
            </label>
            <br />
            <textarea
              v-model="engagementDetail.description"
              type="text"
              class="textArea"
              maxlength="1000"
            />
          </div>
        </div>
        <div class="flex flex-wrap mb-8">
          <div class="max-w-lg sm:w-1/3 mb-4 mr-20">
            <label
              class="block tracking-wide text-black text-md font-bold font-body mb-2"
              for="policyProgram"
            >
              {{ $t('engagement.policy') }}
            </label>
            <input
              id="policyProgram"
              v-model="engagementDetail.policyProgram"
              :placeholder="$t('engagement.typing')"
              class="textInput"
              type="text"
            />
          </div>

          <div class="max-w-lg sm:w-1/3 mb-4">
            <label
              class="block tracking-wide text-black text-md font-bold font-body mb-2"
              for="tags"
            >
              {{ $t('engagement.tags') }}
            </label>
            <input
              id="tags"
              v-model="engagementDetail.tags"
              class="textInputTag"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-6/12 mb-8">
            <label
              class="block tracking-wide text-black text-md font-bold font-body mb-4"
              for="comments"
            >
              {{ $t('engagement.comments') }}
            </label>
            <br />
            <textarea
              v-model="engagementDetail.comments.content"
              type="text"
              name="KeyNotes"
              class="textArea"
              maxlength="1000"
            />
          </div>
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

      <div class="flex justify-start mb-12">
        <div class="w-3/12 margins">
          <AppButton class="font-display" custom_style="btn-cancel" data_cypress="formButton">
            {{ $t('engagement.save') }}
          </AppButton>
        </div>
        <div class="w-3/12 margins">
          <AppButton class="font-display" custom_style="btn-extra" data_cypress="formButton">
            {{ $t('engagement.save') }}
          </AppButton>
        </div>
        <!-- <span>
          Subject Selected: {{ engagementDetail.subject }}
          Contact Selected: {{ engagementDetail.contacts }}
          Type Selected: {{ engagementDetail.type }}
          Date Selected: {{ engagementDetail.date }}
          numParticipants Selected: {{ engagementDetail.numParticipants }}
          description Selected: {{ engagementDetail.description }}
          policyProgram Selected: {{ engagementDetail.policyProgram }}
          tags Selected: {{ engagementDetail.tags }}
          Comments Selected: {{ engagementDetail.comments.content }}
          Comments Selected: {{ engagementDetail.comments.date }}
        </span> -->
      </div>
    </form>
  </div>
</template>

<script>
import SelectContact from './EngSelectContacts.vue'
import AppButton from '@/components/app/AppButton.vue'

export default {
  name: 'EngagementForm',
  components: {
    AppButton,
    SelectContact
  },
  data() {
    return {
      mySVG: require('../../assets/images/calendar.svg'),
      message: {
        type: null,
        message: null
      },
      engagementDetail: {
        // vmodel binding
        type: '',
        date: new Date(),
        description: '',
        numParticipants: 0,
        // for testing contact
        contacts: [
          '561fa3aac09d1fa4eb63f806'
        ],
        policyProgram: '',
        comments: [
          {
            user: 'unknown',
            content: '',
            date: new Date().toISOString().slice(0, 10)
          }
        ],
        tags: ''
      },
      engagementTypes: [
        { type: 'One-on-one' },
        { type: 'Conference' },
        { type: 'Conference call' },
        { type: 'Workshop' },
        { type: 'Webinar' },
        { type: 'Phone call' },
        { type: 'Committee meeting' },
        { type: 'Working group' },
        { type: 'Senior management briefing' },
        { type: 'Minister office briefing' },
        { type: 'Scrum/Sprint' },
        { type: 'Advisory board/Council Meeting' }
      ]
    }
  },
  methods: {
    increment() {
      this.engagementDetail.numParticipants++
    },
    decrement() {
      if (this.engagementDetail.numParticipants > 0) {
        this.engagementDetail.numParticipants--
      }
    },
    // dateAdj() {
    //   return this.engagementDetail.date.setDate(
    //     this.engagementDetail.date.getDate() + 1
    //   )
    // },
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

    async submitForm(engagementDetail) {
      try {
        await this.$axios.post('/api/engagement/addEngagement', {
          engagementDetail
        })
        this.notification('success', 'engagment created')
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
.title {
  font-weight: 600;
  color: #426177;
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold text-4xl pt-4;
}
.formTitle {
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold text-4xl pt-4;
}
.btn-extra {
  @apply w-11/12 h-12 justify-start;
}
.btn-cancel {
  @apply justify-start bg-gray-300 w-11/12 text-black h-12;
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
  @apply appearance-none block w-full text-gray-700 border border-black rounded py-3 px-4 leading-tight;
}
.dateStyle:focus {
  border: 2.5px solid;
  @apply outline-none border-black;
}
.messageBox {
  @apply text-center text-2xl align-bottom mb-4 h-12 min-h-0 mt-2 text-black bg-green-700;
}
.numberIncrement {
  @apply appearance-none block w-full text-gray-700 border border-black rounded py-3 px-4 leading-tight;
}
.numberIncrement:focus {
  border: 2.5px solid;
  @apply outline-none border-black;
}
.textArea {
  @apply w-full border h-32 border-black;
}
.textArea:focus {
  border: 2.5px solid;
  @apply outline-none border-black;
}
.textInput {
  @apply appearance-none block w-full text-gray-700 border border-black rounded py-3 px-4 leading-tight;
}
.textInput:focus {
  border: 2.5px solid;
  @apply outline-none border-black;
}
.textInputTag {
  @apply appearance-none block w-6/12 text-gray-700 border border-black rounded py-3 px-4 leading-tight;
}
.textInputTag:focus {
  border: 2.5px solid;
  @apply outline-none border-black;
}
.error {
  @apply bg-red-700;
}
</style>
