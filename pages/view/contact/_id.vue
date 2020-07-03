<template>
  <div class="contactForm">
    <h1 class="title">
      {{ $t('contact.contact') }}
    </h1>

    <div v-if="$fetchState.pending" class="messageBox">
      <span>
        {{ $t('contact.fetching') }}
      </span>
    </div>
    <div v-else-if="$fetchState.error">
      <span>
        {{ $t('contact.fetcherror') }}
      </span>
    </div>
    <div v-else>
      <div class="flex mb-4">
        <div class="w-5/12 margins">
          <ConViewFields label="type">
            {{ contactInfo.type }}
          </ConViewFields>
        </div>
        <div class="w-5/12 margins">
          <ConViewFields label="email">
            {{ contactInfo.keyContactEmail }}
          </ConViewFields>
        </div>
      </div>

      <div class="flex mb-4">
        <div class="w-5/12 margins">
          <ConViewFields label="address">
            {{ contactInfo.keyContactAddress }}
          </ConViewFields>
        </div>
        <div class="w-5/12 margins">
          <ConViewFields label="phone">
            {{ contactInfo.keyContactPhone }}
          </ConViewFields>
        </div>
      </div>

      <h2 class="title">
        {{ $t('contact.organization') }} <br />
        {{ $t('contact.information') }}
      </h2>

      <div class="flex mb-4">
        <div class="w-5/12 margins">
          <ConViewFields label="address">
            {{ contactInfo.orgAddress }}
          </ConViewFields>
        </div>
        <div class="w-5/12 margins">
          <ConViewFields label="email">
            {{ contactInfo.orgEmail }}
          </ConViewFields>
        </div>
      </div>

      <h2 class="title">
        {{ $t('contact.engagements') }}
      </h2>

      <div class="max-w-full px-4 my-8 py-6 border border-gray-500">
        <ConShowEngagaments :index="0" :tags="['tag1', 'tag2', 'tag3']" />
        <ConShowEngagaments :tags="['tagX1', 'tagX2', 'tagX3']" />
      </div>

      <div class="flex justify-start mb-4">
        <div class="w-3/12 margins">
          <AppButton custom_style="btn-cancel" data_cypress="formButton">
            {{ $t('contact.back') }}
          </AppButton>
        </div>
        <div class="w-3/12 margins">
          <AppButton custom_style="btn-extra" data_cypress="formButton">
            {{ $t('contact.edit') }}
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '@/components/app/AppButton.vue'
import ConViewFields from '@/components/contact/ConViewFields.vue'
import ConShowEngagaments from '@/components/contact/ConShowEngagements.vue'

export default {
  name: 'ContactView',

  components: {
    ConViewFields,
    ConShowEngagaments,
    AppButton
  },

  async fetch() {
    try {
      await this.$store.dispatch('contacts/fetchContact', this.$route.params.id)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error: ', e.response)
    }
  },

  computed: mapState({
    contactInfo: state => state.contacts.contact
  })
}
</script>

<style scoped>
.contactForm {
  width: 1200px;
  margin: auto;
  font-family: 'DejaVu Serif', 'Roboto slab', 'sans-serif', 'Helvetica Neue';
  @apply bg-white text-black;
}
.title {
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold text-4xl pt-4;
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
.messageBox {
  @apply text-center text-2xl align-bottom mb-4 h-12 min-h-0 mt-2 text-black bg-green-700;
}
.error {
  @apply bg-red-700;
}
</style>
