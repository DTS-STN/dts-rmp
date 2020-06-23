<template>
  <div class="items-center" data-cy="error">
    <!-- english -->
    <div class="flex w-full items-center">
      <div class="py-2 m-auto">
        <img
          class="h-40 icon rounded-b-full rounded-t-full shadow-lg"
          src="~/assets/images/errorIcon.svg"
          alt
          aria-hidden="true"
          data-cy="error-img"
        />
      </div>
    </div>
    <div class="flex flex-wrap items-center px-4 py-2 sm:py-4 xl:px-40">
      <div
        class="w-full md:w-1/2 md:border-r-2 border-rmp-dk-blue rounded-l text-rmp-dk-blue py-3 shadow-md"
        role="alert"
      >
        <div class="flex items-center">
          <div class="px-10">
            <p class="font-semibold ml-4" data-cy="error-msg">
              Oops! We couldn't find that Web page.
            </p>
            <p class="text-md font-bold ml-4" data-cy="error-404">
              Error 404
            </p>
            <button
              class="ml-4 mt-2 bg-rmp-orange hover:bg-rmp-dk-orange text-white font-bold py-2 px-4 border border-rmp-dk-blue rounded"
              data-cy="homebtn-en">
              <nuxt-link to="/">
                <span>Go to the homepage
                </span>
              </nuxt-link>
            </button>
          </div>
        </div>
      </div>
      <!-- french -->
      <div
        class="w-full md:w-1/2  border-t-2 md:border-t-0 md:border-l-2 border-rmp-dk-blue rounded-r text-rmp-dk-blue py-3 shadow-md"
        role="alert"
      >
        <div class="flex items-center">
          <div class="px-10 md:px-4 lg:px-10">
            <p class="font-semibold text-base ml-4" data-cy="error-msgfr">
              Oops! Nous ne pouvons trouver cette page Web.
            </p>
            <p class="text-md font-bold ml-4" data-cy="error-404fr">
              Erreur 404
            </p>
            <button
              class="ml-4 mt-2 bg-rmp-orange hover:bg-rmp-dk-orange text-white font-bold py-2 px-4 border border-rmp-dk-blue rounded"
              data-cy="homebtn-fr">
              <nuxt-link to="/">
                <span>Aller à la page d'accueil
                </span>
              </nuxt-link>
            </button>
          </div>
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
