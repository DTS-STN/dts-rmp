<template>
  <div>
    <img class="headerImg" src="../assets/images/u1.png" />
    <div class="text-container">
      <div class="grid grid-cols-4 gap-1">
        <div
          v-if="this.$nuxt.$route.name === 'engagement-create'"
          class="col-span-2 ..."
        >
          <span class="newTxt">{{ newtxt }}</span>
          <span class="newODGD">{{ ogd }}</span>
          <span class="newTxt">{{ engagement }}</span>
        </div>
        <div v-if="this.$nuxt.$route.name === 'index'" class="col-span-2 ...">
          <span class="newTxt">{{ stakeholder }}</span>
        </div>
        <div class="col-end-5 col-span-1 text-right text-white underline">
          <a href>Log Out</a>
        </div>
      </div>
      <div class="grid grid-cols-7 gap-1 pt-4 flex-shrink-0">
        <div class="col-span-4 ...">
          <p class="text-white">
            {{ titleDescription }}
          </p>
        </div>
        <div class="col-end-8 col-span-3 text-right">
          <div
            v-if="this.$nuxt.$route.name === 'engagement-create'"
            class="greyCircle"
          >
            1
          </div>
          <div v-if="this.$nuxt.$route.name === 'index'" class="orangeCircle">
            1
          </div>
          <div class="rectangle" />
          <div
            v-if="this.$nuxt.$route.name === 'engagement-create'"
            class="orangeCircle"
          >
            2
          </div>
          <div v-if="this.$nuxt.$route.name === 'index'" class="greyCircle">
            2
          </div>
          <div class="rectangle" />
          <div class="whiteCircle">
            3
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TitleTexts',
  props: {
    newtxt: {
      default: 'New ',
      type: String
    },
    ogd: {
      default: 'OGD ',
      type: String
    },
    engagement: {
      default: 'New',
      type: String
    },
    stakeholder: {
      default: 'Stakeholder engager',
      type: String
    },
    titleDescription: {
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.',
      type: String
    }
  }
}
</script>
<style scoped>
.container {
  @apply relative content-center;
}
.headerImg {
  height: 550px;
  @apply w-full;
}
.text-container {
  top: 120px;
  @apply px-32 absolute;
}
.newTxt {
  @apply text-5xl font-bold text-white;
  font-family: 'Lato Bold', 'Lato Regular', 'Lato';
}
.newODGD {
  @apply text-5xl font-bold text-orange-500;
  font-family: 'Lato Bold', 'Lato Regular', 'Lato';
}
.greyCircle {
  margin: -2px;
  @apply rounded-full h-16 w-16 flex items-center justify-center text-black inline-flex font-bold bg-gray-500;
}
.orangeCircle {
  border: 3px solid;
  @apply rounded-full h-16 w-16 flex items-center justify-center text-white inline-flex font-bold bg-orange-500 border-white;
}
.whiteCircle {
  margin: -2px;
  @apply rounded-full h-16 w-16 flex items-center justify-center text-orange-500 inline-flex font-bold bg-white;
}
.rectangle {
  @apply h-1 w-4 bg-white -m-1 mb-auto;
  @apply inline-flex items-center justify-center;
}
</style>
