<template>
  <div class="comment">
    <div class="text">
      <a class="username" href="#">
        {{ $t('engagement.user') }}
      </a>
      <span class="date">
        {{ getDateAndTime(date) }}
      </span>
      <br />
      <span class="content">
        {{ comment }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleComment',
  props: {
    comment: { type: String, default: '' },
    date: { type: Date, default: new Date() }
  },
  methods: {
    getDateAndTime(date) {
      return date.toISOString().slice(0, 10) + ' ' + this.twelveHourClock(date) + this.timeOfDay(date)
    },
    twelveHourClock(date) {
      return ((date.getHours() > 12) ? (date.getHours() - 12).toString + date.toTimeString().slice(2, 5) : date.toTimeString().slice(0, 5))
    },
    timeOfDay(date) {
      return (date.getHours() < 12) ? 'am' : 'pm'
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
