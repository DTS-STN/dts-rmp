<template>
  <div>
    <div class="grid grid-cols-12 leading-10 bdr bottom pt-6 pb-6 px-2" :class="[index == 0 ? 'first': '']">
      <div class="col-span-12 sm:col-span-10 md:col-span-6">
        <div>
          <span class="orangeText">
            {{ subject }}
          </span>
          {{ type }}, {{ date }}
        </div>
        <div>
          <span v-for="(tag) in tags" :key="tag.id" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="col-span-12 sm:col-span-10 md:col-span-5">
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

      <div class="col-start-6 col-span-12 sm:col-span-2 md:col-span-1 flex items-center">
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
  name: 'ConShowEngagements',

  props: {
    id: { type: String, default: '' },
    index: { type: Number, default: 1 },
    subject: { type: String, default: 'Engagement subject' },
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
  @apply bg-rmp-lt-blue text-rmp-md-blue rounded-full px-4 py-1 ml-2;
}
</style>
