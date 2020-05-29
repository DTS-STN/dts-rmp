<template>
  <div class="px-5">
    <form @submit.prevent="createEngagement">
      <h1 class="text-4xl font-semibold">
        General Information
      </h1>
      <h5>All fields are mandatory.</h5>
      <br />
      <div class="flex flex-wrap -mb-4">
        <Subject class="w-full sm:w-1/3 mb-4" />
        <Date class="w-full sm:w-1/3 mb-4" />
        <Engagement class="w-full sm:w-1/3 mb-4" />
        <Status class="w-full sm:w-1/3 mb-4" />
        <KeyNotes class="w-full sm:w-2/3 mb-4" />
      </div>
      <br />
      <h1 class="text-4xl font-semibold">
        Contact Information
      </h1>
      <h5>All fields are mandatory.</h5>
      <br />
      <div class="flex flex-wrap -mb-4">
        <KeyContactName class="w-full sm:w-1/3 mb-4" />
        <KeyContactEmail class="w-full sm:w-1/3 mb-4" />
        <ESDCContactName class="w-full sm:w-1/3 mb-4" />
      </div>
      <br />
      <div class="sm:float-right">
        <PreviousButton />
        <SubmitButton />
      </div>
    </form>
  </div>
</template>

<script>
// General Information
import Subject from './FormComponents/Subject'
import Date from './FormComponents/Date'
import Engagement from './FormComponents/Engagement'
import Status from './FormComponents/Status'
import KeyNotes from './FormComponents/KeyNotes'

// Contact Information
import KeyContactName from './FormComponents/KeyContactName'
import KeyContactEmail from './FormComponents/KeyContactEmail'
import ESDCContactName from './FormComponents/ESDCContactName'

// Buttons
import SubmitButton from './FormComponents/SubmitButton'
import PreviousButton from './FormComponents/PreviousButton'
export default {
  components: {
    Subject,
    Date,
    Engagement,
    Status,
    KeyNotes,
    KeyContactName,
    KeyContactEmail,
    ESDCContactName,
    SubmitButton,
    PreviousButton
  },
  methods: {
    createEngagement() {
      this.$emit('createEngagement', ['arguments', 'go', 'here'])
      // We might want to redirect after creation..
      // or stay on page and empty all fields
    }
  }
}
</script>

<style></style>
