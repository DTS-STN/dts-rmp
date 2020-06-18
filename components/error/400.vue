<template>
  <div class="container">
    <div class="error-404">
      <div class="row">
        <div class="message col">
          <p class="errorText">{{ $t('error.fourofourmessage') }}</p>
          <p class="errorText2">{{ $t('error.fourofour') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
