<template>
  <div class="comment">
    <div class="text">
      <a class="username" href="#">
        @Ben117
      </a>
      <span class="date">
        2020-07-16
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
  props: { comment: { type: String, default: '' } }
}
</script>

<style scoped>
/* Single-comment component */
.comment {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    @apply font-display rounded-full bg-gray-300;
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
