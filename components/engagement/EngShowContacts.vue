<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <div>
    <div
      class="flex max-w-full leading-10 bdr bottom pt-6 pb-6"
      :class="[index == 0 ? 'first' : '']"
    >
      <div class="w-6/12 pl-2">
        <div>
          <span class="orangeText pr-0">{{ name }}</span>, {{ orgname }}, {{ title }}
        </div>
        <div><a :href="'tel:' + phone">{{ phone }}</a>, <a :href="'mailto:'+ email">{{ email }}</a></div>
      </div>

      <div class="w-5/12 bdr leftBorder">
        <div>
          <span class="orangeText">
            {{ last }}
          </span>
        </div>
        <div>{{ date }}, {{ number }} {{ $t('contact.otherpeople') }}</div>
      </div>

      <div class="w-1/12 flex items-center">
        <button
          class="btn-round"
          data_cypress="link"
          @click="goto(id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConShowContacts',

  props: {
    index: { type: Number, default: 1 },
    name: { type: String, default: 'lastname, name' },
    orgname: { type: String, default: '' },
    title: { type: String, default: '' },
    phone: { type: String, default: '' },
    email: { type: String, default: '' },
    last: { type: String, default: 'No Engagement found' },
    date: { type: String, default: 'yyyy/mm/dd' },
    number: { type: String, default: '0' },
    id: { type: String, default: '' }
  },

  methods: {
    goto(id) {
      this.$router.push('/' + this.$i18n.locale + '/view/contact/' + id)
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
.btn-round {
  background-image: url('../../assets/images/orange-arrow.png');
  background-size: 58px 56px;
  height: 58px;
  width: 56px;
}
@media (max-width: 768px) {
  .left {
    @apply hidden;
  }
}
</style>
