<script setup>
import { computed, ref } from "vue";
import useTeam from "@/composables/useTeam.js";
import useEvent from "@/composables/useEvent.js";

const props = defineProps({
  logo: {
    type: String,   
  },
  name: {
    type: String,
  },
  record: {
    type: String,
  },
  teamId: {
    type: String,
  },
  eventId: {
    type: String,
  },
  league: {
    type: String
  },
  score: {
    type: String,
  },
  gameStatus: {
    type: String,
  },
  homeAway: {
    type: String,
  }
})

const { getTeamRoster, getTeam } = useTeam(props.league);
const team = ref(null)
team.value = await getTeamRoster(props.teamId)

const { getEventMatchup } = useEvent(props.eventId, props.league);
const eventMatchup = ref(null);
eventMatchup.value = await getEventMatchup();

</script>

<template>
  <!-- On this next div, add the page navigation to the team being selected -->
  <!-- (Team Page based on id similar to that on Team Page) -->
  <div class="relative w-[50%] gap-6 flex justify-between space-x-3 border border-gray-200 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
    <div class="flex-shrink-0 drop-shadow-lg">
      <img class="h-14 w-14" :src="logo" :alt="`${name} Logo`" />
    </div>
    <div class="min-w-0">
      <a href="#" class="focus:outline-none">
        <p class="text-lg font-bold text-gray-900">{{ name }}</p>
        <div class="flex items-center gap-x-2">
          <p class="truncate font-medium text-sm text-gray-700">({{ record }})</p>
          <p class="truncate text-sm text-gray-500">{{ team.standingSummary }}</p>
        </div>

        <!-- Needs to be a better/cleaner way to do this... -->
        <div
          v-if="props.homeAway === 'home'" 
          class="flex items-center justify-between"
        >
          <p class="truncate italic font-medium text-sm text-gray-700">
            Win Probability:
          </p>
          <p class="truncate text-sm text-gray-500">
            {{ eventMatchup.predictor.homeTeam.gameProjection }} %
          </p>
        </div>
        <div
          v-if="props.homeAway === 'away'" 
          class="flex items-center justify-between"
        >
          <p class="truncate italic font-medium text-sm text-gray-700">
            Win Probability:
          </p>
          <p class="truncate text-sm text-gray-500">
            {{ eventMatchup.predictor.awayTeam.gameProjection }} %
          </p>
        </div>
      </a>
    </div>
    <p class="align-middle text-4xl font-bold">
      {{ props.score }}
    </p>
  </div>
</template>



<style lang="scss" scoped>

</style>