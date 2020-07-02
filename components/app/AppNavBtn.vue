<template>
  <div>
    <div id="btna" class="app flex">
      <button
        data-cy="search-nav"
        class="switch underline"
        :style="{ color: txtColorAdd, 'background-color': bgColorAdd, 'box-shadow': boxShadowAdd }"
        @click="colorChange(true)"
      >
        Search contacts & engagements
      </button>
      <button
        data-cy="add-nav"
        class="switch underline"
        :style="{ color: txtColorSearch, 'background-color': bgColorSearch, 'box-shadow': boxShadowSearch }"
        @click="colorChange(false)"
      >
        Add contacts & engagements
      </button>
    </div>
    <div v-if="!isSelected">
      <AppNavAdding />
    </div>
    <div v-else>
      <AppNavSearching />
    </div>
  </div>
</template>

<script>
import AppNavAdding from '../app/AppNavAdding'
import AppNavSearching from '../app/AppNavSearching'
export default {
  components: {
    AppNavAdding,
    AppNavSearching
  },
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
  methods: {
    colorChange(select) {
      if (select === true) {
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
button:focus {
  outline: none;
}

button.switch {
  padding: 25px;
  @apply cursor-pointer text-3xl font-display font-bold text-center w-full;
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
