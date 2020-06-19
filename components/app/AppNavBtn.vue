<template>
  <div class="app flex flex-wrap">
    <button
      class="switch add"
      :style="{ color: txtColorAdd, 'background-color': bgColorAdd }"
      @click="colorChange(true)"
    >
      <h2>New engagement</h2>
    </button>
    <button
      class="switch search"
      :style="{ color: txtColorSearch, 'background-color': bgColorSearch }"
      @click="colorChange(false)"
    >
      <h2>Search contacts & engagements</h2>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtColorAdd: '',
      bgColorAdd: '',
      txtColorSearch: '',
      bgColorSearch: ''
    }
  },
  methods: {
    colorChange(select) {
      if (select === true) {
        this.txtColorAdd = '#D87C4F'
        this.bgColorAdd = 'white'
        this.bgColorSearch = '#D87C4F'
        this.txtColorSearch = 'white'
      } else {
        this.txtColorAdd = 'white'
        this.bgColorAdd = '#D87C4F'
        this.bgColorSearch = 'white'
        this.txtColorSearch = '#D87C4F'
      }
    }
  }
}
</script>

<style>
button:focus {
  outline: none;
}

button:disabled {
  @apply text-orange-600 bg-white;
}

button.switch {
  padding: 40px;
  @apply cursor-pointer text-4xl font-serif underline shadow-sm font-bold border-0 text-center m-0 w-6/12;
}

button.add {
  @apply float-left text-orange-600;
  background-color: white;
}

button.search {
  @apply float-right text-white;
  background-color: #d87c4f;
}
</style>
