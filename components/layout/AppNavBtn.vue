<template>
  <div>
    <div id="btna" class="app flex">
      <nuxt-link
        :to="localePath('/search/engagement')"
        data-cy="search-nav"
        class="switch underline"
        :style="{ color: txtColorAdd, 'background-color': bgColorAdd, 'box-shadow': boxShadowAdd }"
        @click.native="colorChange(true)"
      >
        Search contacts & engagements
      </nuxt-link>
      <nuxt-link
        :to="localePath('/add/engagement')"
        data-cy="add-nav"
        class="switch underline"
        :style="{ color: txtColorSearch, 'background-color': bgColorSearch, 'box-shadow': boxShadowSearch }"
        @click.native="colorChange(false)"
      >
        Add contacts & engagements
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtColorAdd: '#D87C4F',
      bgColorAdd: 'white',
      txtColorSearch: 'white',
      bgColorSearch: '#D87C4F',
      boxShadowAdd: 'inset 0 10px 30px rgba(0, 0, 0, 0.5), 0 10px rgba(255, 255, 255, 0.5)',
      boxShadowSearch: 'none',
      isSelected: Boolean
    }
  },
  created() {
    if (this.$route.path.includes('add')) {
      this.txtColorSearch = '#D87C4F'
      this.bgColorSearch = 'white'
      this.txtColorAdd = 'white'
      this.bgColorAdd = '#D87C4F'
      this.boxShadowAdd = 'none'
      this.boxShadowSearch = 'inset 0 10px 30px rgba(0, 0, 0, 0.5), 0 10px rgba(255, 255, 255, 0.5)'
    } else {
      this.txtColorSearch = 'white'
      this.bgColorSearch = '#D87C4F'
      this.txtColorAdd = '#D87C4F'
      this.bgColorAdd = 'white'
      this.boxShadowAdd = 'inset 0 10px 30px rgba(0, 0, 0, 0.5), 0 10px rgba(255, 255, 255, 0.5)'
      this.boxShadowSearch = 'none'
    }
  },
  methods: {
    colorChange(select) {
      if (select) {
        this.txtColorAdd = '#D87C4F'
        this.bgColorAdd = 'white'
        this.bgColorSearch = '#D87C4F'
        this.txtColorSearch = 'white'
        this.boxShadowAdd = 'inset 0 10px 30px rgba(0, 0, 0, 0.5), 0 10px rgba(255, 255, 255, 0.5)'
        this.boxShadowSearch = 'none'
        this.isSelected = true
      } else {
        this.txtColorAdd = 'white'
        this.bgColorAdd = '#D87C4F'
        this.bgColorSearch = 'white'
        this.txtColorSearch = '#D87C4F'
        this.boxShadowAdd = 'none'
        this.boxShadowSearch = 'inset 0 10px 30px rgba(0, 0, 0, 0.5), 0 10px rgba(255, 255, 255, 0.5)'
        this.isSelected = false
      }
    }
  }
}
</script>

<style scoped>
.switch:focus {
  outline: none;
}
.switch {
  padding: 25px;
  @apply cursor-pointer text-3xl font-serif font-bold text-center w-full;
}
.not-selected{
  color: white;
  background-color: #D87C4F;
  box-shadow: none;

}
.selected{
  color: #D87C4F;
  background-color: white;
  box-shadow: 'inset 0 10px 30px rgba(0, 0, 0, 0.5), 0 10px rgba(255, 255, 255, 0.5)';
}
@media (max-width: 660px) {
  #btna {
    @apply flex-col w-auto;
  }
}
@media (max-width: 660px) {
  #h2Text {
    @apply text-2xl;
  }
}
</style>
