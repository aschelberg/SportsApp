<script setup>
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { ref } from "vue";
import LeagueSchedulesTeam from "@/components/LeagueSchedules/LeagueSchedulesTeam.vue";
import EventPreviewModal from "@/components/LeagueSchedules/Modal/EventPreviewModal.vue";
import useLeague from "@/composables/useLeague.js";
import BaseBadge from "@/components/BaseBadge/BaseBadge.vue"

dayjs.extend(localizedFormat)

const props = defineProps({
  year: {
    type: String,
  },
  league: {
    type: String,
  },
})

const mainFilters = [
  { name: 'Week 1', value: '1', href: '#', current: false },
  { name: 'Week 2', value: '2', href: '#', current: false },
  { name: 'Week 3', value: '3', href: '#', current: false },
  { name: 'Week 4', value: '4', href: '#', current: false },
  { name: 'Week 5', value: '5', href: '#', current: false },
  { name: 'Week 6', value: '6', href: '#', current: false },
  { name: 'Week 7', value: '7', href: '#', current: false },
  { name: 'Week 8', value: '8', href: '#', current: false },
  { name: 'Week 9', value: '9', href: '#', current: false },
  { name: 'Week 10', value: '10', href: '#', current: false },
  { name: 'Week 11', value: '11', href: '#', current: false },
  { name: 'Week 12', value: '12', href: '#', current: false },
  { name: 'Week 13', value: '13', href: '#', current: false },
  { name: 'Week 14', value: '14', href: '#', current: false },
  { name: 'Week 15', value: '15', href: '#', current: false },
  { name: 'Week 16', value: '16', href: '#', current: false },
  { name: 'Week 17', value: '17', href: '#', current: false },
  { name: 'Week 18', value: '18', href: '#', current: false },
]

const currentWeek = ref('18')
const updateCurrentWeek = (name) => {
  mainFilters.forEach((t) => t.current = false)
  const selectedWeek = mainFilters.find((t) => t.name === name)
  currentWeek.value = selectedWeek.value;
  selectedWeek.current = true
  
  console.log(mainFilters)
}


const { getSchedule } = useLeague('nfl');
const schedule = await getSchedule(undefined, {year:'2023', week:currentWeek.value});

const activeEventId = ref(null);
const openEventModal = (id) => {
  activeEventId.value = id;
}
const closeEventModal = () => {
  activeEventId.value = null;
}

const eventObject = (id) => {
  return schedule.find((t) => t.id === id)
}


</script>

<template>
  <div>

    <header>
      <div class="justify-stretch gap-2 bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div class="py-4">
            <div class="p-2 border rounded-md border-gray-500 shadow-lg">
              <label for="tabs" class="sr-only">Select a tab</label>
              <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
              <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                <option v-for="filter in mainFilters" :key="filter.name" :selected="filter.current" @click="updateCurrentWeek(filter.name)">{{ filter.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>

    
    <div class="grid grid-cols-1 gap-3">
      <div v-for="event in schedule" class="flex w-full sm:grid-cols-1 rounded-lg border border-gray-200 bg-gray-50 p-3">
        <div class="flex-1">
          <div class="flex justify-between items-center text-sm mb-2 font-bold">
            <div>
              {{ dayjs(event.date).format('ddd, MMM D [@] h:mm A') }}
            </div>
            <div>
              <BaseBadge 
                :text="event.competitions[0].status.type.description"
                :type="'green'"
              />
            </div>
            <button
              class="p-1 px-3 hover:text-blue-700 hover:bg-blue-100 rounded transition-all"
              @click="openEventModal(event.id)"
            >
              Preview Matchup
            </button>
          </div>
          <EventPreviewModal
            :key="event.id"
            :active="activeEventId === event.id"
            :eventId="event.id"
            :name="event.name"
            league="nfl"
            :competitors="event.competitions[0].competitors"
            :scheduleEntry="eventObject(event.id)"
            @close-modal="closeEventModal"
          />
          <div class="flex">
            <LeagueSchedulesTeam
              v-for="(team, index) in event.competitions[0].competitors"
              :key="team.id"
              :class="{
                'rounded-r-lg order-1': index === 0,
                'rounded-l-lg': index === 1
              }"
              :logo="team.team.logo"
              :name="team.team.name"
              :record="team.records[0].summary"
              :teamId="team.id"
              :eventId="event.id"
              :score="team.score"
              :homeAway="team.homeAway"
              :gameStatus="event.competitions[0].status.type.description"
              league="nfl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>