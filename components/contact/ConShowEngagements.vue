<template>
  <div>
    <div class="flex max-w-full leading-10 bdr bottom pt-6 pb-6" :class="[index == 0 ? 'first': '']">
      <div class="w-6/12 pl-2">
        <div>
          <span class="orangeText">
            {{ $t('engagement.engagement') }}
          </span>
          {{ type }}, {{ date }}
        </div>
        <div>
          <span v-for="(tag) in tags" :key="tag.id" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="w-5/12 bdr leftborder">
        <div>
          <span class="orangeText">
            {{ $t('engagement.contacts') }}
          </span>
          <ul class="inline-block">
            <li v-for="contact in max3Contacts(contacts)" :key="contact.id" class="inline-block ml-2 ">
              {{ contact.keyContactName }}
            </li>
          </ul>
          <span v-if="moreContacts">
            ...
          </span>
        </div>
        <div>
          {{ $t('engagement.numpeople') }} {{ number }}
        </div>
      </div>

      <div class="w-1/12">
        <!-- <button
          class="btn-round"
          data_cypress="link"
          @click="modalDisplay(id)"
        /> -->
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
  name: 'ConShowEngagaments',

  props: {
    id: { type: String, default: '' },
    index: { type: Number, default: 1 },
    name: { type: String, default: 'Engagement name' },
    type: { type: String, default: 'Unknown' },
    date: { type: String, default: 'Unknown' },
    tags: { type: Array, default: () => [] },
    contacts: { type: Array, default: () => [] },
    number: { type: Number, default: -1 }
  },

  data() {
    return {
      moreContacts: false,
      selectedID: -1
    }
  },

  methods: {
    modalDisplay(id) {
      this.selectedID = id
      // this.$router.push('/' + this.$i18n.locale + '/view/contact/' + id)
      this.$emit('modalDisplay', this.selectedID)
    },
    goto(id) {
      this.$router.push('/' + this.$i18n.locale + '/view/engagement/' + id)
    },

    max3Contacts(inputArray) {
      if (inputArray.length > 3) {
        this.moreContacts = true
        return inputArray.slice(0, 3)
      } else {
        this.moreContacts = false
        return inputArray
      }
    }
  }
}
</script>

<style scoped>
.viewcard {
  @apply flex max-w-full leading-10 bdr bottom pt-6 pb-6
}
.orangeText {
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
.leftborder {
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
.tag {
  @apply bg-rmp-dk-orange text-white rounded-full px-4 py-1 ml-2;
}
@media (max-width: 768px) {
  .leftborder { @apply hidden; }
}
</style>
