<template>
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
          value="Download PDF"
          class="md:float-right"
        />
      </div>
    </div>
    <div>
      <!-- This form might be a component -->
      <form class="sm:flex">
        <!-- These selects will be components that passes the data to it. -->
        <!-- Time -->
        <select id="time" name="time" class="w-3/4 p-3 m-2 md:w-full">
          <option value="sixMonths">
            Last 6 Months
          </option>
          <option value="threeMonths">
            Last 3 Months
          </option>
          <option value="oneMonth">
            Last Month
          </option>
        </select>
        <!-- Subjects -->
        <select id="subject" name="subject" class="w-3/4 p-3 m-2 md:w-full">
          <option value="allSubject">
            All Subjects
          </option>
          <option value="EIData">
            EI Data
          </option>
          <option value="CERB">
            CERB
          </option>
          <option value="HomelessGrants">
            Homeless Grants
          </option>
        </select>
        <!-- Organization -->
        <select
          id="organization"
          name="organization"
          class="w-3/4 p-3 m-2 md:w-full"
        >
          <option value="allOrganisations">
            All Organizations
          </option>
          <option value="RBC">
            RBC
          </option>
          <option value="StatsCan">
            StatsCan
          </option>
          <option value="CRA">
            CRA
          </option>
          <option value="BMO">
            BMO
          </option>
          <option value="OntarioGov">
            Ontario Gov
          </option>
          <option value="OttawaMission">
            Ottawa Mission
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
</style>
