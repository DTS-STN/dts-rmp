<template>
  <div class="m-4 p-3">
    <div class="w-full">
      <div class="flex flex-wrap mb-8">
        <div class="max-w-lg sm:w-1/3 mb-4 mr-20">
          <label
            class="block tracking-wide text-black text-md font-bold font-body mb-2"
            for="subject"
          >
            {{ $t('engagement.subject') }}
          </label>
          {{ engagement.subject }}
        </div>

        <div class="max-w-lg sm:w-1/3 mb-4">
          <label
            class="block tracking-wide text-black text-md font-bold font-body mb-2"
            for="type"
          >
            {{ $t('engagement.type') }}
          </label>
          <div class="relative max-w-md">
            {{ engagement.type }}
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mb-8">
        <div class="max-w-lg w-2/3 mb-4 mr-20">
          <label
            class="block tracking-wide text-black text-md font-bold font-body mb-2"
            for="date"
          >
            {{ $t('engagement.date') }}
          </label>
          <div class="relative max-w-xs">
            {{ engagement.date }}
          </div>
        </div>

        <div class="max-w-lg sm:w-1/3 mb-4">
          <label
            class="block tracking-wide text-black text-md font-bold font-body mb-2"
            for="numParticipants"
          >
            {{ $t('engagement.participants') }}
          </label>
          <div class="flex relative w-20 ">
            {{ engagement.numParticipants }}
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-6/12 mb-8">
          <label
            class=" block tracking-wide text-black text-md font-bold font-body mb-4"
            for="description"
          >
            <!-- {{ $t('engagement.description') }} -->
            Description
          </label>
          <br />
          <span class="break-all">
            {{ engagement.description }}
          </span>
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
          {{ engagement.policyProgram }}
        </div>

        <div class="max-w-lg sm:w-1/3 mb-4">
          <label
            class="block tracking-wide text-black text-md font-bold font-body mb-2"
            for="tags"
          >
            {{ $t('engagement.tags') }}
          </label>
          <ul>
            <li v-for="(tag, index) in engagement.tags" :key="index">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-6/12 mb-8">
          <label
            class="block tracking-wide text-black text-md font-bold font-body mb-4"
            for="comments"
          >
            <!-- {{ $t('engagement.comments') }} -->
            Comments
          </label>
          <br />
          <!-- Nothing will show up since there are no engagement with comments. -->
          <ul>
            <li v-for="(comment, index) in engagement.comments" :key="index">
              {{ comment }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-start mb-12">
      <div class="w-3/12 margins">
        <AppButton class="font-display" btntype="button" custom_style="btn-cancel" data_cypress="formButton" @click="goBack">
          {{ $t('contact.back') }}
        </AppButton>
      </div>
      <div class="w-3/12 margins">
        <AppButton class="font-display" btntype="button" custom_style="btn-extra" data_cypress="formButton">
          {{ $t('engagement.edit') }}
        </AppButton>
      </div>
    </div>
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
  computed: mapState({
    engagement: state => state.engagements.engagements.find((engagement) => { return engagement._id === window.$nuxt.$route.params.id })
  }),
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.btn-cancel{
  border: 2px solid #426177;
  @apply bg-white text-blue-800;
}
.btn-cancel:hover{
  @apply bg-blue-800 text-white;
}
</style>
