<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <div>
    <div class="flex max-w-full leading-10 bdr bottom pt-6 pb-6" :class="[arrayIndex == 0 ? 'first' : '']">
      <div class="pl-2 w-full lg:w-6/12">
        <div>
          <span class="orangeText pr-0">{{ name }}</span>, {{ orgname }}
        </div>
        <div><a :href="'mailto:'+ email">{{ email }}</a></div>
      </div>

      <div class="w-5/12 bdr leftBorder">
        <div>
          <span class="orangeText">
            {{ subject }}
          </span>
        </div>
        <div>{{ date }}, {{ number }} {{ $t('contact.otherpeople') }}</div>
      </div>

      <div class="flex items-center">
        <button
          :id="id"
          class="btn-round"
          data_cypress="link"
          @click="garbageClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EngSelectedContact',

  props: {
    index: { type: Number, default: 1 },
    name: { type: String, default: 'lastname, name' },
    orgname: { type: String, default: '' },
    email: { type: String, default: '' },
    subject: { type: String, default: 'No Engagement found' },
    date: { type: String, default: 'yyyy/mm/dd' },
    number: { type: Number, default: 0 },
    id: { type: String, default: '' },
    arrayIndex: { type: Number, default: 0 }
  },
  methods: {
    garbageClicked(event) {
      this.$emit('childToParent', this.arrayIndex)
    }
  }
}
</script>

<style scoped>
.viewcard {
  @apply flex max-w-full leading-10 bdr bottom pt-6 pb-6;
}
.orangeText {
  font-family: 'Noto Sans';
  font-size: 18px;
  @apply text-rmp-orange text-base font-bold pr-0;
}
.bdr {
  @apply border-solid border-gray-500;
}
.first {
  @apply border-t-2;
}
.leftBorder {
  @apply border-l-2 pl-2;
}
.bottom {
  @apply border-b-2;
}
.top {
  @apply border-t-2;
}
button.btn-round {
  background-image: url('../../assets/images/garbage.svg') ;
  background-size: 58px 56px;
  height: 58px;
  width: 56px;
  min-width: 58px !important;
}
</style>
