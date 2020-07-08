<template>
  <div class="inline-flex pt-6">
    <nuxt-link
      class="left"
      :style="{ color: txtColorEng, 'background-color': bgColorEng }"
      :to="localePath(`/${ search?'search':'add' }/engagement`)"
      @click.native="colorChange(true)"
    >
      Engagement
    </nuxt-link>
    <nuxt-link
      class="right"
      :style="{ color: txtColorCon, 'background-color': bgColorCon }"
      :to="localePath(`/${ search?'search':'add' }/contact`)"
      @click.native="colorChange(false)"
    >
      Contact
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AppEngConToggle',
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    search: { type: Boolean, default: true }
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
      this.bgColorEng = '#134164'
    } else {
      this.txtColorCon = 'white'
      this.bgColorCon = '#134164'
      this.txtColorEng = 'black'
      this.bgColorEng = 'white'
    }
  },
  methods: {
    colorChange(select) {
      if (select) {
        this.isSelected = false
        this.txtColorCon = 'white'
        this.bgColorCon = '#134164'
        this.bgColorEng = 'white'
        this.txtColorEng = 'black'
      } else {
        this.txtColorCon = 'black'
        this.bgColorCon = 'white'
        this.bgColorEng = '#134164'
        this.txtColorEng = 'white'
        this.isSelected = true
      }
    }
  }
}
</script>

<style>

</style>
