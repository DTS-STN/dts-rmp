<template>
  <div class="contactForm font-body mt-8 mx-12">
    <h2 class="title font-display">
      Add a comment
    </h2>

    <form @submit.prevent="submitForm(commentInfo)">
      <div class="flex mb-4">
        <div class="w-5/12 margins">
          <label class="formLabel" for="comment">
            Comment
          </label>
          <textarea
            id="comment"
            v-model="commentInfo.content"
            type="text"
            name="Comment"
            class="textArea"
            maxlength="140"
          />
        </div>
      </div>

      <div class="flex justify-start mb-4">
        <div class="w-3/12 margins">
          <AppButton custom_style="btn-cancel" data_cypress="formCancelButton">
            {{ $t('contact.cancel') }}
          </AppButton>
        </div>
        <div class="w-3/12 margins">
          <AppButton custom_style="btn-extra" data_cypress="formSaveButton">
            {{ $t('contact.save') }}
          </AppButton>
        </div>
      </div>
    </form>

    <div class="bg-orange-300 border p-4 mb-6">
      <ul>
        <li v-for="(comment, index) in storedComments" :key="index">
          <span>
            {{ comment.content }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppButton from '@/components/app/AppButton.vue'

export default {
  name: 'EngComments',

  components: {
    AppButton
  },

  data() {
    return {
      commentInfo: {
        eng_id: '5ef4ee00a7cc2a950e1d5641',
        content: 'Testing new comments '
      }
    }
  },

  computed: mapState({
    storedComments: state => state.engagements.comments
  }),

  methods: {
    goBack() {
      this.$router.back()
    },

    submitForm(commentInfo) {
      this.$store.dispatch('engagements/addComment', commentInfo)
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
.textArea {
  @apply w-full border h-32 border-black;
}
.textArea:focus {
  border: 2.5px solid;
  @apply outline-none border-black;
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
</style>
