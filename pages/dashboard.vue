<template>
  <div class="px-10 py-5 xl:px-64">
    <div class="sm:flex sm:w-full">
      <div class="mx-2 sm:w-3/4">
        <h2 class="dashboardTitle">
          {{ $t('dashboard.title') }}
        </h2>
      </div>
      <div class="mx-2 w-1/4">
        <!-- <AppButton /> -->
        <input
          id="pdfButton"
          type="button"
          :value="$t('dashboard.download')"
          class="md:float-right"
        />
      </div>
    </div>
    <div>
      <form class="sm:flex">
        <!-- Time select -->
        <select
          class="dropdowns md:w-full"
        >
          <option value="SixMonths" disabled selected hidden>
            {{ $t('dashboard.sixMonths') }}
          </option>
          <option value="SixMonths">
            {{ $t('dashboard.sixMonths') }}
          </option>
          <option value="threeMonths">
            {{ $t('dashboard.threeMonths') }}
          </option>
          <option value="lastMonth">
            {{ $t('dashboard.lastMonth') }}
          </option>
        </select>
        <!-- Subject select -->
        <select
          class="dropdowns md:w-full"
        >
          <option value="allSubjects" disabled selected hidden>
            {{ $t('dashboard.allSubjects') }}
          </option>
          <option value="allSubjects">
            {{ $t('dashboard.allSubjects') }}
          </option>
          <option value="EIData">
            {{ $t('dashboard.EIData') }}
          </option>
          <option value="CERB">
            {{ $t('dashboard.CERB') }}
          </option>
          <option value="HomelessGrants">
            {{ $t('dashboard.HomelessGrants') }}
          </option>
        </select>
        <!-- Organisation select -->
        <select
          class="dropdowns md:w-full"
        >
          <option value="AllOrganisations" disabled selected hidden>
            {{ $t('dashboard.AllOrganisations') }}
          </option>
          <option value="AllOrganisations">
            {{ $t('dashboard.AllOrganisations') }}
          </option>
          <option value="RBC">
            {{ $t('dashboard.RBC') }}
          </option>
          <option value="StatsCan">
            {{ $t('dashboard.StatsCan') }}
          </option>
          <option value="CRA">
            {{ $t('dashboard.CRA') }}
          </option>
          <option value="BMO">
            {{ $t('dashboard.BMO') }}
          </option>
          <option value="OntarioGov">
            {{ $t('dashboard.OntarioGov') }}
          </option>
          <option value="OttawaMission">
            {{ $t('dashboard.OttawaMission') }}
          </option>
        </select>
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
export default {}
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
.dashboardTitle {
  color: #426177;
  @apply font-bold text-4xl;
}
</style>
