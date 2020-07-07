<template>
  <div>
    <form @submit.prevent="submitForm(engagement)">
      <div class="w-full">
        <div class="flex flex-wrap mb-8">
          <div class="max-w-lg sm:w-1/3 mb-4 mr-20">
            <label
              class="orange block tracking-wide text-black text-md font-bold font-body mb-2"
              for="subject"
            >
              {{ $t('engagement.subject') }}
            </label>
            <!-- <input
              id="subject"
              v-model="engagement.subject"
              :placeholder="$t('engagement.typing')"
              class="textInput"
              type="text"
            /> -->
            {{ engagement.subject }}
          </div>

          <div class="max-w-lg sm:w-1/3 mb-4">
            <label
              class="orange block tracking-wide text-black text-md font-bold font-body mb-2"
              for="type"
            >
              {{ $t('engagement.type') }}
            </label>
            <div class="relative max-w-md">
              <!-- <select
                v-model="engagement.type"
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
              </select> -->
              {{ engagement.type }}
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
              <!-- <input
                :value="engagement.date && engagement.date.toISOString().split('T')[0]"
                placeholder="yyyy-mm-dd"
                class="dateStyle"
                type="date"
                @input="engagement.date = $event.target.valueAsDate"
              /> -->
              {{ engagement.date }}
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
              <!-- <input
                id="numParticipants"
                v-model="engagement.numParticipants"
                class="numberIncrement"
                type="text"
              /> -->
              {{ engagement.numParticipants }}
              <!-- <div class="flex flex-col absolute inset-y-0 right-0 items-center px-2">
                <button class="items-end" @click.prevent="increment">
                  +
                </button>
                <button class="items-end" @click.prevent="decrement">
                  -
                </button>
              </div> -->
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
            <!-- <textarea
              v-model="engagement.description"
              type="text"
              class="textArea"
              maxlength="1000"
            /> -->
            {{ engagement.description }}
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
            <!-- <input
              id="policyProgram"
              v-model="engagement.policyProgram"
              :placeholder="$t('engagement.typing')"
              class="textInput"
              type="text"
            /> -->
            {{ engagement.policyProgram }}
          </div>

          <div class="max-w-lg sm:w-1/3 mb-4">
            <label
              class="block tracking-wide text-black text-md font-bold font-body mb-2"
              for="tags"
            >
              {{ $t('engagement.tags') }}
            </label>
            <!-- <input
              id="tags"
              v-model="engagement.tags"
              class="textInputTag"
              type="text"
            /> -->
            {{ engagement.tags }}
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
            <!-- <textarea
              v-model="engagement.comments.content"
              type="text"
              name="KeyNotes"
              class="textArea"
              maxlength="1000"
            /> -->
            {{ engagement.comments }}
          </div>
        </div>
      </div>

      <!-- <div
        v-if="message.message != null"
        class="messageBox"
        :class="[message.type == 'error' ? ' error' : ' ']"
      >
        <span>
          {{ message.message }}
        </span>
      </div> -->

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
          Subject Selected: {{ engagement.subject }}
          Contact Selected: {{ engagement.contacts }}
          Type Selected: {{ engagement.type }}
          Date Selected: {{ engagement.date }}
          numParticipants Selected: {{ engagement.numParticipants }}
          description Selected: {{ engagement.description }}
          policyProgram Selected: {{ engagement.policyProgram }}
          tags Selected: {{ engagement.tags }}
          Comments Selected: {{ engagement.comments.content }}
          Comments Selected: {{ engagement.comments.date }}
        </span> -->
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '@/components/app/AppButton.vue'
export default {
  name: 'EngagementView',

  components: {
    AppButton
  },

  async fetch() {
    try {
      await this.$store.dispatch('engagements/fetchEngagement', this.$route.params.id)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error: ', e.response)
    }
  },
  computed: mapState({
    engagement: state => state.engagements.engagement
  })
}
</script>

<style scoped>
</style>
