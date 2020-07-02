<template>
  <div>
    <label class="formLabel" :class="[required ? ' orange' : '']" for="selname">
      {{ labeltext }}
    </label>
    <select
      id="selname"
      :class="customstyle"
      class="formSelect"
      :data-cy="datacypress"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <option v-for="opt in options" :key="opt.key" :value="opt.value">
        {{ opt.options }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
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
        return [{ key: 0, value: '-1', options: 'Select value' }]
      }
    }
  }
}
</script>

<style scoped>
.orange {
  /* background-image: url('../../assets/images/orange-star.png'); */
  background-repeat: no-repeat;
  @apply mt-6 pl-6 pr-4 font-bold;
}
.formSelect {
  @apply appearance-none block w-full text-gray-700 border bg-white border-black rounded py-3 px-4 leading-tight;
}
.formSelect:focus {
  border: 2.5px solid;
  @apply outline-none border-black;
}
</style>
