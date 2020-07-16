<template>
  <div class="comments-wrapper">
    <div class="comment-bar">
      <input
        v-model.trim="newComment"
        type="text"
        class="comment-text"
        :placeholder="$t('engagement.leaveComment')"
        maxlength="250"
        required
        @keyup.enter="submitComment"
      />
      <button class="comment-btn" @click.prevent="submitComment">
        Comment
      </button>
    </div>
    <hr class="my-2" />
    <EngSingleComment
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import EngSingleComment from '@/components/engagement/EngSingleComment.vue'

export default {
  name: 'EngComments',

  components: {
    EngSingleComment
  },
  props: { comments: { type: Array, default: () => [] } },

  data() {
    return {
      // commentInfo: {
      //   eng_id: '5ef4ee00a7cc2a950e1d5641',
      //   content: ''
      // }
      newComment: ''
    }
  },

  computed: mapState({
    storedComments: state => state.engagements.comments
  }),

  methods: {
    submitComment() {
      if (this.newComment !== '') {
        this.$emit('submit-comment', this.newComment)
        this.newComment = ''
      }
    }
  }
}
</script>

<style scoped>

.comments-wrapper {
    max-height: 250px;
    overflow-y: auto;
    padding-right: 10px;
}

.comment-bar {
    background-color: #E9E9E9;
    @apply flex relative items-center overflow-hidden rounded-full py-1 px-3;
}

.comment-text {
    min-height: 40px;
    @apply p-2 border-none shadow-none bg-transparent outline-none w-full mr-2;
}

input.comment-text:valid {
    margin-right: 90px;
}

input.comment-text:valid + .comment-btn {
    right: 10px;
}

.comment-btn {
    right: -100px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out, right 0.25s ease-in-out;
    @apply absolute py-1 px-3 bg-transparent border border-rmp-md-blue text-rmp-md-blue rounded-full text-sm outline-none inline-block leading-normal font-normal text-center whitespace-no-wrap align-middle select-none;
}

.comment-btn:hover {
 @apply bg-rmp-md-blue text-white;
}

.comment-btn:focus,
.comment-btn:active {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

</style>
