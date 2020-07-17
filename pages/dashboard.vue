<template>
  <!-- This page has no french trasnlation since we do not know the dropdowns official values. -->
  <div class="px-10 py-5 xl:px-64">
    <div class="sm:flex sm:w-full">
      <div class="mx-2 sm:w-3/4">
        <h2 class="text-xl">
          Engagement Dashboard
        </h2>
      </div>
      <div class="mx-2 w-1/4">
        <!-- <AppButton /> -->
        <input
          id="pdfButton"
          type="button"
          :value="$t('footer.symbol')"
          class="md:float-right"
        />
      </div>
    </div>
    <div>
      <form class="sm:flex">
        <app-select
          modelname="hello"
          :options="time"
          class="dropdowns md:w-full"
        />
        <app-select
          modelname="hello"
          :options="subjects"
          class="dropdowns md:w-full"
        />
        <app-select
          modelname="hello"
          :options="organizations"
          class="dropdowns md:w-full"
        />
      </form>
    </div>
    <div class="flex flex-wrap justify-between">
      <img
        src="@/assets/images/dashboard/TotalEng.png"
        alt="Total Engagements"
      />
      <img
        src="@/assets/images/dashboard/TotalSubjects.png"
        alt="Total Subjects"
      />
    </div>
    <img
      src="@/assets/images/dashboard/EngagementTrends.png"
      alt="Engagement trends"
      class="mx-auto"
    />
    <div class="mx-auto lg:grid lg:grid-cols-2">
      <img
        src="@/assets/images/dashboard/EngDistribution.png"
        alt="Engagement Distribution"
      />
      <img
        src="@/assets/images/dashboard/Organizations.png"
        alt="Organizations"
      />
    </div>
    <img
      src="@/assets/images/dashboard/EngbyPT.png"
      alt="Engagements by P/Ts"
      class="mx-auto"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: [
        // { key: 0, value: '-1', options: 'Select value' },
        { key: 1, value: 'SixMonths', options: 'Last 6 Months' },
        { key: 2, value: 'ThreeMonths', options: 'Last 3 Months' },
        { key: 3, value: 'OneMonth', options: 'Last Month' }],
      subjects: [
        // { key: 0, value: '-1', options: 'Select value' },
        { key: 1, value: 'AllSubject', options: 'All Subjects' },
        { key: 2, value: 'EIData', options: 'EI Data' },
        { key: 3, value: 'CERB', options: 'CERB' },
        { key: 3, value: 'HomelessGrants', options: 'Homeless Grants' }],
      organizations: [
        // { key: 0, value: '-1', options: 'Select value' },
        { key: 1, value: 'AllOrganisations', options: 'All Organizations' },
        { key: 2, value: 'RBC', options: 'RBC' },
        { key: 3, value: 'StatsCan', options: 'Stats Can' },
        { key: 4, value: 'CRA', options: 'CRA' },
        { key: 4, value: 'BMO', options: 'BMO' },
        { key: 4, value: 'OntarioGov', options: 'Ontario Gov' },
        { key: 5, value: 'OttawaMission', options: 'Ottawa Mission' }]
    }
  }
}
</script>
<style scoped>
#pdfButton {
  background-color: #246880;
  color: white;
  border-radius: 8px;
  padding: 12px 25px;
}
img {
  box-shadow: 3px 3px 5px 6px #ccc;
  @apply my-4;
}
.dropdowns{
  @apply w-3/4 p-3 m-2;
}
</style>
