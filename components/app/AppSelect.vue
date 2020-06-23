<template>
  <div>
    <label class="formLabel" :class="[required ? ' orange' : '']" for="selname">
      labeltext
    </label>
    <select
      id="selname"
      v-model="modelname"
      class="formSelect"
      :class="customstyle"
      :data-cy="datacypress"
      v-bind="$attrs"
      v-on="$listeners"
      @change="onProvTerr($event)"
    >
      <option v-for="opt in options" :key="opt.key" :value="opt.value">
        {{ opt.options }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',

  props: {
    required: { type: Boolean, default: false },
    labeltext: { type: String, default: '' },
    selname: { type: String, default: '' },
    modelname: { type: String, default: '' },
    datacypress: { type: String, default: 'select-cy' },
    customstyle: { type: String, default: '' },
    options: {
      type: Array,
      default() {
        return { key: 'Select', value: 'none', options: 'Select value' }
      }
    }
  }
}
</script>

<style scoped>
.orange {
  background-image: url('../../assets/images/orange-star.png');
  background-repeat: no-repeat;
  @apply mt-6 pl-6 pr-4 font-bold;
}
.formSelect {
  @apply w-full h-12 border-2 bg-white border-gray-400 rounded;
}
.formselect:focus {
  @apply outline-none bg-blue-500;
}
</style>
