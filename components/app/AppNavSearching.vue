<template>
  <div class="px-4">
    <div>
      <h2 class="searchHeader font-display">
        {{ $t('app.search') }}
      </h2>
      <div>
        <p class="orange requireFields t-2 font-body">
          {{ $t('form.required') }}
        </p>
      </div>
    </div>
    <AppFilterForm @filter="filterInformation" />
    <div class="inline-flex pt-6">
      <nuxt-link
        class="left"
        :style="{ color: txtColorCon, 'background-color': bgColorCon }"
        :to="localePath('/search/contact')"
        @click.native="colorChange(true)"
      >
        Contact
      </nuxt-link>
      <nuxt-link
        class="right"
        :style="{ color: txtColorEng, 'background-color': bgColorEng }"
        :to="localePath('/search/engagement')"
        @click.native="colorChange(false)"
      >
        Engagement
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppFilterForm from '@/components/app/AppFilterForm'
export default {
  components: {
    AppFilterForm
  },
  data() {
    return {
      txtColorCon: '',
      bgColorCon: '',
      txtColorEng: '',
      bgColorEng: '',
      isSelected: true
    }
  },
  created() {
    if (this.$route.path.includes('engagement')) {
      this.txtColorCon = 'black'
      this.bgColorCon = 'white'
      this.txtColorEng = 'white'
      this.bgColorEng = '#2572b4'
    } else {
      this.txtColorCon = 'white'
      this.bgColorCon = '#2572b4'
      this.txtColorEng = 'black'
      this.bgColorEng = 'white'
    }
  },
  methods: {
    colorChange(select) {
      if (select) {
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

    filterInformation(input) {
      this.$emit('filterResults', input)
    }
  }
}
</script>

<style>
.searchHeader {
  font-weight: 600;
  font-style: normal;
  font-size: 48px;
  color: #426177;
}
.requireFields {
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
  @apply cursor-pointer font-display;
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
  @apply cursor-pointer font-display;
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
