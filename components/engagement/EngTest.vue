<template>
  <div class="mt-12">
    <h2 class="headingTxt">
      Create New contact
    </h2>
    <form class="mt-10 max-w-screen-xl">
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Contact type
          </label>
          <div class="relative mt-6 max-w-md">
            <select
              id="grid-state"
              class="block appearance-none w-full bg-gray-200 border border-black border-solid text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none  focus:border-gray-500"
            >
              <option value="" disabled selected hidden>
                Contact type
              </option>
              <option
                v-for="contactType in contactTypes"
                :key="contactType.contact"
              >
                {{ contactType.contact }}
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
          <div class="w-full">
            <h2 class="headingTxt mt-8">
              Contact information
            </h2>
            <div class="flex flex-wrap w-full  -mx-3 mb-6">
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  id="grid-first-name"
                  class="max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0">
                <label
                  class="mb-12 max-w-lgblock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Title
                </label>
                <input
                  id="grid-last-name"
                  class="mb-12 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="w-full px-3 mb-6">
                <label
                  class="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold"
                  for="grid-first-name"
                >
                  Contact Address
                </label>
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0">
                <input
                  id="grid-street"
                  placeholder="Street 1"
                  class="max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0 ">
                <input
                  id="grid-street-2"
                  placeholder="Street 2"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0 ">
                <input
                  id="grid-city"
                  placeholder="City"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0 ">
                <input
                  id="grid-province-territory"
                  placeholder="Province / Territory"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0 ">
                <input
                  id="grid-postal-code"
                  placeholder="Postal Code"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <!-- <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0 ">
                <select
                  id="grid-country"
                  placeholder="Country"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                >
                  <option
                    value=""
                    disabled
                    selected
                    hidden
                    class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    Country
                  </option>
                  <option
                    v-for="item in items"
                    :key="item.name"
                    class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div> -->
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0">
                <label
                  class="mb-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Email
                </label>
                <input
                  id="grid-email"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0">
                <label
                  class="mb-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Phone
                </label>
                <input
                  id="grid-phone"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="w-full px-3 mb-6">
                <h2 class="headingTxt mt-16">
                  Organization information
                </h2>
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0">
                <label
                  class="mb-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-org-address"
                >
                  Organization Address
                </label>
                <input
                  id="grid-phone"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="max-w-lg px-3 md:w-1/2  mb-6 md:mb-0">
                <label
                  class="mb-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-website"
                >
                  Website
                </label>
                <input
                  id="grid-phone"
                  class="mb-4 max-w-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div class="w-6/12 px-3 flex-no-wrap">
                <button
                  class="flex-no-wrap bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  class="flex-no-wrap bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import countryList from '../../static/countryList.json'
export default {
  data() {
    return {
      // items: countryList,
      contactTypes: [
        { contact: 'Federial Goverment & Agencies' },
        { contact: 'External stakeholders' },
        { contact: 'Provincial Territories, Municipal & indigenous Entities' },
        { contact: 'International organizations & Goverments' }
      ]
    }
  }
}
</script>

<style scope>
.headingTxt {
  font-family: 'Lato Bold', 'Lato Regular', 'Lato';
  font-weight: 600;
  font-style: normal;
  font-size: 35px;
  color: #426177;
}
</style>
