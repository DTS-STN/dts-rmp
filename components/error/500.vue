<template>
  <div class="container-fluid p-4">
    <div class="error-500">
      <div class="row">
        <div class="warning col-md-2">
          <img class="w-100 icon" src="~/assets/images/u1.png" alt aria-hidden="true" />
        </div>
        <div class="message col">
          <p class="text">{{ $t('error.fivehundredmessage') }}</p>
          <p class="text2">{{ $t('error.fivehundred') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Error500',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
