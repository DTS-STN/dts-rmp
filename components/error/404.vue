<template>
  <div class="container">
    <div class="error-404">
      <div class="row">
        <div class="warning col-md-2">
          <img
            class="w-100 icon"
            src="~/assets/images/u1.png"
            alt
            aria-hidden="true"
            data-cy="error-img"
          />
        </div>
        <div class="message col" data-cy="error-text">
          <p class="errorText">
            {{ $t('error.fourofourmessage') }}
          </p>
          <p class="errorText2">
            {{ $t('error.fourofour') }}
          </p>
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
