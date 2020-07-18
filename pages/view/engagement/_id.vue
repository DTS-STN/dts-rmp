<template>
  <div class="engagementForm font-body mt-8 mx-4 xl:mx-16">
    <h1 class="title pb-6">
      {{ $t('engagement.engagement') }}
    </h1>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class=" md:w-auto margins ">
        <EngViewFields label="subject">
          {{ engagement.subject }}
        </EngViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class=" md:w-5/12 margins ">
        <EngViewFields label="type">
          {{ engagement.type }}
        </EngViewFields>
      </div>
      <div class=" md:w-5/12 margins ">
        <EngViewFields label="date">
          {{ engagement.date.substring(0, 10) }}
        </EngViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class=" md:w-5/12 margins ">
        <EngViewFields label="participants">
          {{ engagement.numParticipants }}
        </EngViewFields>
      </div>
      <div class=" md:w-5/12 margins ">
        <EngViewFields label="policy">
          {{ engagement.policyProgram }}
        </EngViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class=" md:auto flex margins ">
        <EngViewFields label="tags">
          <ul class="md:inline-flex md:mt-0 display-block">
            <li v-for="(tag, index) in engagement.tags" :key="index" class="tags">
              {{ tag }}
            </li>
          </ul>
        </EngViewFields>
      </div>
    </div>

    <div class=" md:flex flex-wrap mb-4 ">
      <div class="margins break-all">
        <EngViewFields label="description">
          <br />
          {{ engagement.description }}
        </EngViewFields>
      </div>
    </div>

    <div class="md:flex flex-wrap mb-4 ">
      <div class="margins w-full">
        <EngViewFields label="comments">
          <br />
          <EngComments
            :comments="engagement.comments"
            @submit-comment="submitComment"
          />
        </EngViewFields>
      </div>
    </div>

    <h2 class="title">
      {{ $t('engagement.contacts') }}
    </h2>

    <div class="max-w-full px-4 my-8 py-6 border border-gray-500">
      <EngShowContacts
        v-for="(con, index) in engagement.contacts"
        :id="con._id"
        :key="index"
        :index="index"
        :name="con.keyContactName"
        :orgname="con.orgName"
        :last="getLastEngagement(con._id).subject"
        :date="getLastEngagement(con._id).date.substring(0, 10)"
        :number="getLastEngagement(con._id).numParticipants"
        :title="con.keyContactTitle"
        :phone="con.keyContactPhone"
        :email="con.keyContactEmail"
      />
    </div>

    <div class="md:flex flex-wrap justify-start mb-4">
      <div class="md:w-4/12 margins">
        <AppButton class="font-display" btntype="button" custom_style="btn-cancel" data_cypress="formButton" @click="goBack">
          {{ $t('contact.back') }}
        </AppButton>
      </div>
      <div class="md:w-4/12 margins">
        <AppButton class="font-display" btntype="button" custom_style="btn-extra" data_cypress="formButton">
          {{ $t('engagement.edit') }}
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '@/components/app/AppButton.vue'
import EngViewFields from '@/components/engagement/EngViewFields.vue'
import EngShowContacts from '@/components/engagement/EngShowContacts.vue'
import EngComments from '@/components/engagement/EngComments.vue'
export default {
  name: 'EngagementView',

  components: {
    AppButton,
    EngViewFields,
    EngShowContacts,
    EngComments
  },

  async asyncData({ app, params, store }) {
    try {
      await store.dispatch('engagements/fetchEngagement', params.id)
      await store.dispatch('contacts/fetchContacts')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error: ', e.response)
    }
  },

  computed: mapState({
    engagement: state => state.engagements.engagement,
    contacts: state => state.contacts.contacts
  }),
  methods: {
    getLastEngagement(id) {
      const contact = this.contacts.find(contact => id === contact._id)
      const lastEngagement = contact.engagements[0]
      return lastEngagement
    },

    goBack() {
      this.$router.back()
    },
    submitComment(newComment) {
      this.$store.dispatch('engagements/addComment', newComment)
    }
  }
}
</script>

<style scoped>
.engagementForm {
  @apply bg-white text-black text-base;
}
.btn-cancel {
  @apply justify-start bg-gray-300 w-full mt-2 text-black h-12;
}
.btn-extra {
  @apply w-full mt-2 h-12 justify-start;
}
.title {
  @apply text-rmp-md-blue text-left tracking-wide font-extrabold text-2xl pt-4;
}
.margins {
  @apply px-1 py-2 m-2;
}
.tags {
  @apply  bg-rmp-lt-blue text-rmp-md-blue rounded-full px-4 py-1 ml-2 mt-2;
}
@media screen and (max-width: 768px) {
  h1 { font-size: 28px !important; }
  h2 { font-size: 18px !important; }
  h3 { font-size: 16px !important; }
}
</style>
