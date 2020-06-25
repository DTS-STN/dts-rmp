<template>
  <div title="engagementForm">
    <h1 class="title">
      Engagement
    </h1>
    <form @submit.prevent="submitForm(engagementDetail)">
      <div class="w-full">
        <div class="flex flex-wrap mb-8">
          <div class="max-w-lg sm:w-1/3 mb-4 mr-20">
            <label
              class="orange block tracking-wide text-black text-md font-bold mb-2"
              for="subject"
            >
              Subject
            </label>
            <input
              id="subject"
              v-model="engagementDetail.subject"
              placeholder="Start by typing"
              class="textInput"
              type="text"
            />
          </div>

          <div class="max-w-lg sm:w-1/3 mb-4">
            <label
              class="orange block tracking-wide text-black text-md font-bold mb-2"
              for="type"
            >
              Engagement Type
            </label>
            <div class="relative max-w-md">
              <select
                v-model="engagementDetail.type"
                class="textInput"
              >
                <option value="" disabled selected hidden>
                  Engagement type
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
              class="orange block tracking-wide text-black text-md font-bold mb-2"
              for="date"
            >
              Date
            </label>
            <div class="relative max-w-xs">
              <input
                :value="engagementDetail.myDate && engagementDetail.myDate.toISOString().split('T')[0]"
                placeholder="yyyy-mm-dd"
                class="dateStyle"
                type="date"
                @input="engagementDetail.myDate = $event.target.valueAsDate"
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
              class="orange block tracking-wide text-black text-md font-bold mb-2"
              for="participants"
            >
              Number of participants
            </label>
            <div class="flex relative w-20 ">
              <input
                id="participants"
                v-model="engagementDetail.participants"
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
              class="orange block tracking-wide text-black text-md font-bold -mb-4"
              for="description"
            >
              Description maximum 1000 characters. Additional characters will not be
            </label>
            <br />
            <textarea
              v-model="engagementDetail.description"
              type="text"
              class="textArea"
              maxlength="800"
            />
          </div>
        </div>
        <div class="flex flex-wrap mb-8">
          <div class="max-w-lg sm:w-1/3 mb-4 mr-20">
            <label
              class="block tracking-wide text-black text-md font-bold mb-2"
              for="policyProgram"
            >
              Policy / program
            </label>
            <input
              id="policyProgram"
              v-model="engagementDetail.policyProgram"
              placeholder="Start by typing"
              class="textInput"
              type="text"
            />
          </div>

          <div class="max-w-lg sm:w-1/3 mb-4">
            <label
              class="block tracking-wide text-black text-md font-bold mb-2"
              for="tags"
            >
              Tags
            </label>
            <input
              id="tags"
              v-model="engagementDetail.tags"
              placeholder="Item"
              class="textInputTag"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-6/12 mb-8">
            <label
              class="block tracking-wide text-black text-md font-bold -mb-4"
              for="comments"
            >
              Comments (Maximum 140 characters. Additional characters will not be saved.)
            </label>
            <br />
            <textarea
              v-model="engagementDetail.comments"
              type="text"
              name="KeyNotes"
              class="textArea"
              placeholder="Key notes..."
              maxlength="800"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-start mb-12">
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
        <span>
          Subject Selected: {{ engagementDetail.subject }}
          Type Selected: {{ engagementDetail.type }}
          Date Selected: {{ dateAdj() }}
          participants Selected: {{ engagementDetail.participants }}
          description Selected: {{ engagementDetail.description }}
          policyProgram Selected: {{ engagementDetail.policyProgram }}
          tags Selected: {{ engagementDetail.tags }}
          Comments Selected: {{ engagementDetail.comments }}
          Comments Selected: {{ engagementDetail.comments }}
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/app/AppButton.vue'
export default {
  name: 'EngagementForm',
  components: {
    AppButton
  },
  data() {
    return {
      mySVG: require('../../assets/images/calendar.svg'),
      engagementDetail: {
        // vmodel binding
        subject: '',
        type: '',
        myDate: new Date(),
        description: '',
        participants: 0,
        policyProgram: '',
        comments: '',
        tags: ''
      },
      engagementTypes: [
        { type: 'One-On-One' },
        { type: 'Conference' },
        { type: 'Conference Call' },
        { type: 'Workshop' },
        { type: 'Webinar' },
        { type: 'Phone Call' },
        { type: 'Committee meeting' },
        { type: 'Working Group' },
        { type: 'Senior management Briefing' },
        { type: 'Minister Office briefing' },
        { type: 'Scrum/Sprint' },
        { type: 'Advisory Board/Council Meeting' }
      ]
    }
  },
  methods: {
    increment() {
      this.engagementDetail.participants++
    },
    decrement() {
      if (this.engagementDetail.participants > 0) {
        this.engagementDetail.participants--
      }
    },
    dateAdj() {
      return this.engagementDetail.myDate.setDate(
        this.engagementDetail.myDate.getDate() + 1
      )
    },
    async submitForm(engagementDetail) {
      try {
        await this.$axios.post('/api/engagement/addContact', {
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
  /* font-size: 35px; */
  color: #426177;
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
.numberIncrement {
  @apply appearance-none block w-full text-gray-700 border border-black rounded py-3 px-4 leading-tight;
}
.numberIncrement:focus {
  border: 2.5px solid;
  @apply outline-none border-black;
}
.textArea {
  @apply w-full border border-black;
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
</style>
