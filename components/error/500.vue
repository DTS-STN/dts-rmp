<template>
  <div class="items-center px-4 py-2 sm:py-4">
    <!-- single button that uses the language switch -->
    <div
      class="w-full md:border-r-2 border-rmp-dk-blue rounded-l text-rmp-dk-blue py-3 shadow-md"
      role="alert"
    >
      <div class="flex items-center py-1 px-4">
        <div class="rounded-b-full rounded-l-full rounded-t-full shadow-lg">
          <img
            class="h-20 icon"
            src="~/assets/images/errorIcon.svg"
            alt
            aria-hidden="true"
            data-cy="error-img"
          />
        </div>
        <div data-cy="fiveOO-error">
          <p class="font-semibold ml-4"> {{ $t('error.fivehundredmessage') }}
          </p>
          <p class="text-md font-bold ml-4">{{ $t('error.fivehundred') }}
          </p>
          <button
            class="ml-4 mt-2 bg-rmp-orange hover:bg-rmp-dk-orange text-white font-bold py-2 px-4 border border-rmp-dk-blue rounded"
          >
            <nuxt-link
              to="/"
            >
              <span>
                {{ $t('error.buttontext') }}
              </span>
            </nuxt-link>
          </button>
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
