<template>
  <div class="contactForm">
    <h1 class="title">
      {{ $t('contact.contact') }}
    </h1>
    <div class="flex mb-4">
      <div class="w-5/12 margins">
        <ConViewFields label="keyContactName">
          {{ contactInfo.keyContactName }}
        </ConViewFields>
      </div>
      <div class="w-5/12 margins">
        <ConViewFields label="phone">
          {{ contactInfo.keyContactPhone }}
        </ConViewFields>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-5/12 margins">
        <ConViewFields label="type">
          {{ contactInfo.type }}
        </ConViewFields>
      </div>
      <div class="w-5/12 margins">
        <ConViewFields label="keyContactEmail">
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
    </div>
    <h2 class="title">
      {{ $t('contact.organization') }}
    </h2>
    <div class="flex mb-4">
      <div class="w-5/12 margins">
        <ConViewFields label="address">
          {{ contactInfo.orgAddress }}
        </ConViewFields>
      </div>
      <div class="w-5/12 margins">
        <ConViewFields label="orgEmail">
          {{ contactInfo.orgEmail }}
        </ConViewFields>
      </div>
    </div>
    <h2 class="title">
      {{ $t('contact.engagements') }}
    </h2>
    <div class="max-w-full px-4 my-8 py-6 border border-gray-500">
      <ConShowEngagaments
        v-for="(eng, index) in contactInfo.engagements"
        :id="eng._id"
        :key="index"
        :subject="eng.subject"
        :index="index"
        :type="eng.type"
        :contacts="getNames(eng.contacts)"
        :tags="eng.tags"
        :date="eng.date.substring(0, 10)"
        :description="eng.description"
        :number="eng.numParticipants"
      />
    </div>
    <div class="flex justify-start mb-4">
      <div class="w-3/12 margins">
        <AppButton custom_style="btn-cancel" type="button" data_cypress="contactDetailBackButton" @click="goBack">
          {{ $t('contact.back') }}
        </AppButton>
      </div>
      <div class="w-3/12 margins">
        <AppButton custom_style="btn-extra" data_cypress="contactDetailEditButton" @click="goEdit">
          {{ $t('contact.edit') }}
        </appbutton>
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

  async asyncData({ app, params, store }) {
    try {
      await store.dispatch('contacts/fetchContact', params.id)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error: ', e.response)
    }
  },

  computed: mapState({
    contactInfo: state => state.contacts.contact,
    contacts: state => state.contacts.contacts
  }),

  created() {
    if (this.contacts.length === 0) {
      try {
        this.$store.dispatch('contacts/fetchContacts').then(
          mapState({
            contacts: state => state.contacts.contacts
          })
        )
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Error: ', e.response)
      }
    }
  },

  methods: {
    goBack() {
      this.$router.back()
    },

    goEdit() {
      this.$router.push('/' + this.$i18n.locale + '/edit/contact/' + this.$route.params.id)
    },

    getNames(ListOfIdsToFind) {
      if (this.contacts.length > 0) {
        const contact = []
        ListOfIdsToFind.forEach((element) => {
          contact.push(this.contacts.find(contact => contact._id === element))
        })
        return contact
      } else {
        return []
      }
    }
  }
}
</script>

<style scoped>
.contactForm {
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
