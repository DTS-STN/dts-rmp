<template>
  <div>
    <div
      class="flex max-w-full leading-10 bdr bottom pt-6 pb-6"
      :class="[index == 0 ? 'first': '']"
    >
      <div class="w-6/12 pl-2">
        <div>
          <span class="orange">
            {{ title }}
          </span>
          {{ name }}, {{ date }}
        </div>
        <div>
          <!-- eslint-disable-next-line vue/no-template-shadow -->
          <span v-for="(tag, index) in tags" :key="index" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="w-5/12 bdr left">
        <div>
          <span class="orange">
            Key Contact name
          </span> {{ keycontact }}
        </div>
        <div>
          Number of participants: {{ number }}
        </div>
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

  name: 'ConShowEngagaments',

  components: { AppButton },

  props: {
    index: { type: Number, default: 1 },
    title: { type: String, default: 'Engagement title' },
    type: { type: String, default: 'Public' },
    date: { type: String, default: 'yyyy/mm/dd' },
    tags: { type: Object, default: null },
    keycontact: { type: String, default: 'some name' },
    number: { type: String, default: '1' },
    id: { type: String, default: '5eefd2eb0fdece1daabc2383' }
  },

  methods: {
    goto(id) {
      this.$router.push('/' + this.$i18n.locale + '/view/contact/' + id)
    }
  }
}
</script>

<style scoped>
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
  padding: .8rem 1.2rem .8rem 1.2rem;
  @apply leading-normal rounded-full;
}
@media (max-width: 768px) {
  .left { @apply hidden; }
}
</style>
