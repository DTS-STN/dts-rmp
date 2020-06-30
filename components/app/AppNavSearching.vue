<template>
  <div class="px-4">
    <div class="mt-24">
      <h2 class="newAdd">
        Search
      </h2>
      <div>
        <p class="orange requireFields t-2">
          Required fields
        </p>
      </div>
    </div>
    <AppFilterForm @FilterEngagements="filter" />
    <div class="inline-flex pt-6">
      <button
        class="left"
        :style="{ color: txtColorCon, 'background-color': bgColorCon }"
        @click="colorChange(true)"
      >
        Contact
      </button>
      <button
        class="right"
        :style="{
          color: txtColorEng,
          'background-color': bgColorEng
        }"
        @click="colorChange(false)"
      >
        Engagement
      </button>
    </div>
    <div>
      <div v-if="!isSelected">
        Contact Results
      </div>
      <div v-else>
        <Eng
          v-for="eng in filteredEngagements"
          :id="eng._id"
          :key="eng._id"
          :type="eng.type"
          :contacts="eng.contacts"
          :tags="eng.tags"
          :date="eng.date"
          :description="eng.description"
          :participants="eng.numParticipants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Eng from '@/components/engagement/EngListItem'
import AppFilterForm from '@/components/app/AppFilterForm'
export default {
  components: {
    AppFilterForm,
    Eng
  },
  data() {
    return {
      txtColorCon: '',
      bgColorCon: '',
      txtColorEng: 'white',
      bgColorEng: '#2572b4',
      isSelected: true,
      engagements: [
      ],
      filteredEngagements: [
      ]
    }
  },
  async created() {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const res = await this.$axios.get('/api/engagement/engagements', config)
      this.engagements = res.data
      this.filteredEngagements = res.data
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },
  methods: {
    colorChange(select) {
      if (select === true) {
        this.isSelected = false
        this.txtColorCon = 'white'
        this.bgColorCon = '#2572b4'
        this.bgColorEng = 'white'
        this.txtColorEng = 'black'
      } else {
        this.txtColorCon = 'black'
        this.bgColorCon = 'white'
        this.bgColorEng = '#2572b4'
        this.txtColorEng = 'white'
        this.isSelected = true
      }
    },
    filter(input) {
      const searchtext = input.toLowerCase()
      const results = this.engagements.filter(engagement =>
        engagement.type.toLowerCase().includes(searchtext)
      )
      this.filteredEngagements = results
    }
  }
}
</script>

<style>
.newAdd {
  font-family: 'Lato Bold', 'Lato Regular', 'Lato';
  font-weight: 600;
  font-style: normal;
  font-size: 48px;
  color: #426177;
}
.requireFields {
  font-family: 'Noto Sans Bold', 'Noto Sans Regular', 'Noto Sans';
  font-weight: 700;
  font-style: normal;
  color: #d87c4f;
}
button.left {
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  background-color: white;
  border: 0.5px groove #ccccccd7;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: 0;
  @apply cursor-pointer font-serif;
}
button.right {
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  background-color: white;
  border: 0.5px groove #ccccccd7;
  /* border-left: 0px !important; */
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: 0;
  @apply cursor-pointer font-serif;
}
.orange {
  background-image: url('../../assets/images/orange-star.png');
  background-repeat: no-repeat;
  @apply mt-6 pl-6 pr-4 font-bold;
}
.fontNoto {
  font-family: 'Noto Sans', 'DejaVu Serif', 'Roboto slab', 'sans-serif',
    'Helvetica Neue';
}
</style>
