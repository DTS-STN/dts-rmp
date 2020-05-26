<template>
  <div>
    /* eslint-disable */
    <img class="headerImg" src="../assets/images/u1.png" />
    <div class="text-container">
      <div class="grid grid-cols-4 gap-1">
        <div class="col-span-2 ...">
          <span class="newTxt">New</span>
          <span class="newODGD">OGD</span>
          <span class="newTxt">meeting</span>
        </div>
        <div class="col-end-5 col-span-1 text-right text-white">
          <a href="">Log Out</a>
        </div>
      </div>
      <div class="grid grid-cols-7 gap-1 pt-4">
        <div class="col-span-4 ...">
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar sic
            tempor. Bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar sic
            tempor.
          </p>
        </div>
        <div class="col-end-8 col-span-2 text-right">
          <div class="greyCircle">
            1
          </div>
          <div class="rectangle " />
          <div class="whiteCircle">
            2
          </div>
          <div class="rectangle" />
          <div class="whiteCircle3">
            3
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  text-align: center;
}

.headerImg {
  @apply w-full;
  height: 648px;
}
.text-container {
  position: absolute;
  top: 120px;
  @apply px-32;
}
.newTxt {
  font-size: 48px;
  font-family: 'Lato Bold', 'Lato Regular', 'Lato';
  font-weight: 700;
  color: white;
}
.newODGD {
  font-size: 48px;
  font-family: 'Lato Bold', 'Lato Regular', 'Lato';
  font-weight: 700;
  color: #d87c4c;
}
.greyCircle {
  background-color: grey;
  margin: -2px;
  @apply rounded-full h-16 w-16 flex items-center justify-center text-black inline-flex font-medium;
}
.whiteCircle {
  background-color: orange;
  border: 3px solid white;
  @apply rounded-full h-16 w-16 flex items-center justify-center text-white inline-flex font-medium;
}
.whiteCircle3 {
  background-color: white;
  margin: -2px;
  @apply rounded-full h-16 w-16 flex items-center justify-center text-orange-500 inline-flex font-medium;
}
.rectangle {
  height: 3px;
  width: 15px;
  background-color: white;
  margin: -4.5px;
  @apply inline-flex items-center justify-center;
}
</style>
