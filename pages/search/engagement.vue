<template>
  <div class="main pt-1 xl:mx-16">
    <AppNavSearching class="my-16" @filterResults="filter" />

    <div class="max-w-full px-4 my-8 py-6 border border-gray-500">
      <ConShowEngagaments
        v-for="(eng, index) in filteredEngagements"
        :id="eng._id"
        :key="index"
        :index="index"
        :type="eng.type"
        :contacts="eng.contacts"
        :tags="eng.tags"
        :date="(eng.date).substring(0, 10)"
        :description="eng.description"
        :number="eng.numParticipants"
        @modalDisplay="modalDisplay"
      />
    </div>
    <!-- Uncomment app modal component and import to use modal -->
    <!-- <AppModal v-if="showModal" :id="selectedID" @close="showModal = false">
      <p class="text-xl">
        This is placeholder text
      </p>
      <br />
      <br />
      <p class="text-xl">
        To show that it is reactive to what we pass in the slot
      </p>
      <br />
      <br />
      <p class="text-xl">
        Pass engagement Form here
      </p>
      <br />
      <br />
      <p class="text-xl">
        You selected ID: {{ selectedID }}
      </p>
    </AppModal> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ConShowEngagaments from '@/components/contact/ConShowEngagements.vue'
// import AppModal from '@/components/app/AppModal.vue'

export default {
  components: {
    ConShowEngagaments
    // ,AppModal
  },

  async asyncData({ app, params, store }) {
    try {
      await store.dispatch('engagements/fetchEngagements')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error fetching Engagements', e)
    }
  },

  data() {
    return {
      filteredEngagements: [],
      showModal: false,
      selectedID: -1
    }
  },

  computed: mapState({
    engagements: state => state.engagements.engagements
  }),

  beforeMount() {
    this.filteredEngagements = this.engagements
  },

  methods: {
    modalDisplay(id) {
      this.showModal = true
      this.selectedID = id
    },

    filter(input) {
      const searchText = input.toLowerCase()

      const results = this.engagements.filter((engagement) => {
        const values = Object.values(engagement)
        let flag = false

        values.forEach((val) => {
          if (typeof val !== 'string') {
            return
          }
          if (val.toLowerCase().includes(searchText)) {
            flag = true
          }
        })
        if (flag === true) {
          return engagement
        }
      })

      this.filteredEngagements = results
    }
  }

}
</script>

<style>
.main {
  min-height: 100vh;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  @apply pt-12;
  @apply text-center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
