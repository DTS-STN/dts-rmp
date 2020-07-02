<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <div>
    <div
      class="flex max-w-full leading-10 bdr bottom pt-6 pb-6"
      :class="[index == 0 ? 'first' : '']"
    >
      <div class="w-6/12 pl-2">
        <div>
          <span class="orange"> {{ name }} </span>, {{ orgname }}, {{ title }}
        </div>
        <div>{{ phone }}, {{ email }}</div>
      </div>

      <div class="w-5/12 bdr left">
        <div>
          <span class="orange">
            {{ last }}
          </span>
        </div>
        <div>{{ date }}, {{ number }} {{ $t('contact.otherpeople') }}</div>
      </div>

      <div class="w-1/12">
        <AppButton
          custom_style="btn-round"
          data_cypress="link"
          @click="goto(id)"
        >
          >
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/app/AppButton.vue'

export default {
  name: 'ConShowContacts',

  components: { AppButton },

  props: {
    index: { type: Number, default: 1 },
    name: { type: String, default: 'lastname, name' },
    orgname: { type: String, default: 'GoC' },
    title: { type: String, default: 'Developer' },
    phone: { type: String, default: '1-999-999-9999' },
    email: { type: String, default: 'x@x.com' },
    last: { type: String, default: 'Engagement x' },
    date: { type: String, default: 'yyyy/mm/dd' },
    number: { type: String, default: '1' },
    id: { type: String, default: '5eefd2eb0fdece1daabc2383' }
  },

  methods: {
    goto(id) {
      this.$router.push('/' + this.$i18n.locale + '/view/engagement/' + id)
    }
  }
}
</script>

<style scoped>
.viewcard {
  @apply flex max-w-full leading-10 bdr bottom pt-6 pb-6;
}
.orange {
  font-family: 'Noto Sans';
  font-size: 18px;
  @apply text-rmp-orange text-base font-bold;
}
.bdr {
  @apply border-solid border-gray-500;
}
.first {
  @apply border-t-2;
}
.left {
  @apply border-l-2 pl-2;
}
.bottom {
  @apply border-b-2;
}
.btn-round {
  margin: 10px 10px 10px 10px;
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  @apply leading-normal rounded-full;
}
@media (max-width: 768px) {
  .left {
    @apply hidden;
  }
}
</style>
