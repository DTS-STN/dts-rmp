<template>
  <div>
    <div id="btna" class="app flex">
      <button
        class="switch add "
        :style="{ color: txtColorAdd, 'background-color': bgColorAdd }"
        @click="colorChange(true)"
      >
        <h2 id="h2Text">
          Add contacts & engagements
        </h2>
      </button>
      <button
        class="switch search "
        :style="{ color: txtColorSearch, 'background-color': bgColorSearch }"
        @click="colorChange(false)"
      >
        <h2 id="h2Text">
          Search contacts & engagements
        </h2>
      </button>
    </div>
    <div v-if="!this.isSelected" class="add">
      <add-contact />
    </div>
    <div v-else class="search">
      <search-contact />
    </div>
  </div>
</template>

<script>
import AddContact from '../../pages/add/contact.vue'
import SearchContact from '../../pages/search/contact.vue'
export default {
  components: {
    AddContact,
    SearchContact
  },
  data() {
    return {
      txtColorAdd: '',
      bgColorAdd: '',
      txtColorSearch: '',
      bgColorSearch: '',
      isSelected: false
    }
  },
  methods: {
    colorChange(select) {
      if (select === true) {
        this.txtColorAdd = '#D87C4F'
        this.bgColorAdd = 'white'
        this.bgColorSearch = '#D87C4F'
        this.txtColorSearch = 'white'
        this.isSelected = false
      } else {
        this.txtColorAdd = 'white'
        this.bgColorAdd = '#D87C4F'
        this.bgColorSearch = 'white'
        this.txtColorSearch = '#D87C4F'
        this.isSelected = true
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
  padding: 25px;
  @apply cursor-pointer text-3xl font-serif underline shadow-sm font-bold border-0 text-center m-0 w-full;
}

button.add {
  @apply float-left text-orange-600;
  background-color: white;
}

button.search {
  @apply float-right text-white;
  background-color: #d87c4f;
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
