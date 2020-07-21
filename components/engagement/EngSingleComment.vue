<template>
  <div class="comment">
    <div class="text">
      <a class="username" href="#">
        {{ $t('engagement.user') }}
      </a>
      <span class="date">
        {{ getDateAndTime(comment.date) }}
      </span>
      <br />
      <span class="content">
        {{ comment.content }}
      </span>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'SingleComment',
  props: {
    comment: { type: Object, default: () => {} }
  },
  methods: {
    getDateAndTime(date) {
      console.log(date)
      if (date) {
        return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_SHORT)
      } else {
        return 'No date recorded'
      }
    }
  }
}
</script>

<style scoped>
/* Single-comment component */
.comment {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    @apply font-display rounded bg-gray-300 break-all;
}

.text {
    margin-left: 5px;
}
.date{
    @apply font-normal text-gray-600;
}
.content {
    margin-left: 5px;
    @apply font-normal;
}

</style>
