<script setup>
import { useRoute, useRouter } from "vue-router";
import dayjs from "dayjs";
import { ref } from "vue";
import useLeague from "@/composables/useLeague.js";
import useTeam from "@/composables/useTeam.js";
import TeamRosterTable from "@/components/Teams/Team/TeamRosterTable.vue";
import TeamScheduleTable from "@/components/Teams/Team/TeamScheduleTable.vue";
import TeamStats from "@/components/Teams/Team/TeamStats.vue";

const route = useRoute()

const props = defineProps({
  teamId: {
    type: String,
  }
})

const teamNav = [
  { name: 'Schedule', current: true },
  { name: 'Roster', current: false },
  { name: 'Team Stats', current: false },
]

const teamTab = ref('Schedule')

const updateComponent = (name) => {
  teamNav.forEach((t) => {
    if (t.name === name) {
      t.current = true;
      teamTab.value = name;
    } else{
      t.current = false;
    }
  })
}

// nfl Giants - 19 -- Saquon Barkley - 3929630
// mlb Yankees - 10 -- Aaron Judge - 33192
// nba Warriors - 9 -- Steph Curry - 3975

const { getTeams, getSchedule } = useLeague("nfl");
const { getTeamRoster, getTeam } = useTeam("nfl");

const teamRoster = await getTeamRoster(route.params.id);

</script>

<template>
<div>
    <!-- Team Header -->
  <div>
    <div class="h-32 w-full object-cover lg:h-48">
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img
            class="h-24 w-24 sm:h-32 sm:w-32"
            :src="teamRoster.logos[0].href"
            :alt="`${teamRoster.abbreviation} Logo`"
          />
        </div>
        <div
          class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
        >
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
            <h1 class="truncate text-2xl font-bold text-gray-900">
              {{ teamRoster.displayName }}
            </h1>
          </div>
          <div
            class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <button
              type="button"
              class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="18"
                viewBox="0 0 576 512"
              >
                <path
                  d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
                />
              </svg>
              <span class="pl-1">Favorite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Team Summary -->
  <div>
    <dl
      class="mx-auto w-[85%] grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-3 lg:grid-cols-3"
    >
      <div
        class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
      >
        <dt class="text-xs font-medium leading-6 text-gray-500">Record</dt>
        <dd
          class="w-full flex-none text-xl font-medium leading-10 tracking-tight text-gray-900"
        >
          {{ teamRoster.record.items[0].summary }}
        </dd>
      </div>
      <div
        class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
      >
        <dt class="text-xs font-medium leading-6 text-gray-500">Position</dt>
        <dd
          class="w-full flex-none text-xl font-medium leading-10 tracking-tight text-gray-900"
        >
          {{ teamRoster.standingSummary }}
        </dd>
      </div>
      <div
        class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
      >
        <dt class="text-xs font-medium leading-6 text-gray-500">
          Next Game: {{ teamRoster.nextEvent[0]?.week.text || "N/A"}}
        </dt>
        <dt
          class="w-full flex-none text-xs font-medium leading-6 text-gray-500"
        >
          <!-- {{ dayjs(teamRoster.nextEvent[0]?.date) ? dayjs(teamRoster.nextEvent[0].date).format("MMM DD, YYYY") : "N/A" }} -->
        </dt>
        <dd
          class="w-full flex-none text-xl font-medium leading-10 tracking-tight text-gray-900"
        >
          {{ teamRoster.nextEvent[0]?.shortName || "N/A" }}
        </dd>
      </div>
    </dl>
  </div>
  <!-- Teamview selectors -->
  <div class="mb-4">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" 
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option 
          v-for="tab in teamNav" :key="tab.name" :selected="tab.current" @click="updateComponent(tab.name)" class="cursor-pointer"
        >
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex justify-between" aria-label="Tabs">
          <a v-for="tab in teamNav" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium cursor-pointer']" :aria-current="tab.current ? 'page' : undefined"
          @click="updateComponent(tab.name)"
          >{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </div>

  <TeamRosterTable 
    v-show="teamTab === 'Roster'"
    :teamId="route.params.id"
  />
  <TeamScheduleTable
    v-show="teamTab === 'Schedule'"
    :teamId="route.params.id"
  />
  <TeamStats
    v-show="teamTab === 'Team Stats'"
    :teamId="route.params.id"
  />
</div>

</template>
