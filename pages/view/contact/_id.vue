<template>
  <div class="contactForm font-body mt-8 mx-4 xl:mx-16">
    <h1 class="title pb-6">
      {{ $t('contact.contact') }}
    </h1>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-auto margins">
        <ConViewFields label="type">
          {{ $t('contact.' + contactInfo.type) }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="keyContactName">
          {{ contactInfo.keyContactName }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="keyContactTitle">
          {{ contactInfo.keyContactTitle }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="address">
          {{ contactInfo.keyContactAddress }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="address2">
          {{ contactInfo.keyContactAddress2 }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="city">
          {{ contactInfo.keyContactCity }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="provState">
          {{ contactInfo.keyContactProvState }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="country">
          {{ contactInfo.keyContactCountry }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="postal">
          {{ contactInfo.keyContactPostalCode }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="keyContactEmail">
          <a :href="'mailto:'+ contactInfo.keyContactEmail">
            {{ contactInfo.keyContactEmail }}
          </a>
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="phone">
          <a :href="'tel:' + contactInfo.keyContactPhone">
            {{ contactInfo.keyContactPhone }}
          </a>
        </ConViewFields>
      </div>
    </div>

    <!-- =============================== -->

    <h2 class="title mb-8">
      {{ $t('contact.organization') }}
    </h2>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="orgName">
          {{ contactInfo.orgName }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="orgWebsite">
          {{ contactInfo.orgWebsite }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="address">
          {{ contactInfo.orgAddress }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="address2">
          {{ contactInfo.orgAddress2 }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="city">
          {{ contactInfo.orgCity }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="provState">
          {{ contactInfo.orgProvState }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="country">
          {{ contactInfo.orgCountry }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="postal">
          {{ contactInfo.orgPostalCode }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="orgEmail">
          <a :href="'mailto:'+ contactInfo.orgEmail">
            {{ contactInfo.orgEmail }}
          </a>
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="phone">
          <a :href="'mailto:'+ contactInfo.orgPhone">
            {{ contactInfo.orgPhone }}
          </a>
        </ConViewFields>
      </div>
    </div>

    <!-- =============================== -->

    <hr class="border border-rmp-orange mx-4 my-8" />

    <!-- =============================== -->

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="department">
          {{ contactInfo.department }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="branch">
          {{ contactInfo.branch }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="directorate">
          {{ contactInfo.directorate }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="provTerritory">
          {{ $t('contact.' + contactInfo.provTerritory) }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="w-auto margins">
        <ConViewFields label="orgSector">
          {{ $t('contact.' + contactInfo.orgSector) }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="contrib">
          {{ contactInfo.contributionRefNo }}
        </ConViewFields>
      </div>
      <div class="md:w-5/12 margins">
        <ConViewFields label="service">
          {{ contactInfo.serviceContrNo }}
        </ConViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="md:w-5/12 margins">
        <ConViewFields label="standing">
          {{ $t('contact.' + contactInfo.onStandingOffer) }}
        </ConViewFields>
      </div>
    </div>

    <!-- =============================== -->

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

    <div class="md:flex flex-wrap justify-start mb-4">
      <div class="md:w-4/12 margins">
        <AppButton custom_style="btn-cancel" type="button" data_cypress="contactDetailBackButton" @click="goBack">
          {{ $t('contact.back') }}
        </AppButton>
      </div>
      <div class="md:w-4/12 margins">
        <AppButton custom_style="btn-extra" type="button" data_cypress="contactDetailEditButton" @click="goEdit">
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
  @apply bg-white text-black text-base;
}
.title {
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold text-2xl pt-4;
}
.margins {
  @apply px-1 py-2 m-2;
}
.btn-cancel {
  @apply justify-start bg-gray-300 w-full mt-2 text-black h-12;
}
.btn-extra {
  @apply w-full mt-2 h-12 justify-start;
}
@media screen and (max-width: 768px) {
  h1 { font-size: 28px !important; }
  h2 { font-size: 18px !important; }
  h3 { font-size: 16px !important; }
}
</style>
