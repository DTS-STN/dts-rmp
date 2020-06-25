<template>
  <div id="navContainer">
    <div class="mt-24">
      <h2 class="newAdd">
        Add new
      </h2>
      <div>
        <p class="orange requireFields t-2">
          Required field
        </p>
      </div>
    </div>
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
      <ConFormFields v-if="!isSelected" />
      <EngFormFields v-if="isSelected" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtColorCon: '',
      bgColorCon: '',
      txtColorEng: '',
      bgColorEng: '#2572b4',
      isSelected: false
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
