<template>
  <div>
    <div id="btna" class="app flex">
      <button
        class="switch underline"
        :style="{ color: txtColorAdd, 'background-color': bgColorAdd }"
        @click="colorChange(true)"
      >
        <h2 id="h2Text">
          Search contacts & engagements
        </h2>
      </button>
      <button
        class="switch underline"
        :style="{ color: txtColorSearch, 'background-color': bgColorSearch }"
        @click="colorChange(false)"
      >
        <h2 id="h2Text">
          Add contacts & engagements
        </h2>
      </button>
    </div>
    <div v-if="!isSelected">
      <AppNavContactEngagement />
    </div>
  </div>
</template>

<script>
import AppNavContactEngagement from '../app/AppNavContactEngagement'
export default {
  components: {
    AppNavContactEngagement
  },
  data() {
    return {
      txtColorAdd: '#D87C4F',
      bgColorAdd: 'white',
      txtColorSearch: 'white',
      bgColorSearch: '#D87C4F',
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
        this.isSelected = true
      } else {
        this.txtColorAdd = 'white'
        this.bgColorAdd = '#D87C4F'
        this.bgColorSearch = 'white'
        this.txtColorSearch = '#D87C4F'
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
  @apply cursor-pointer text-3xl font-serif font-bold text-center w-full;
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
