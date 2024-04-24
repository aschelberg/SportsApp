<script setup>
import { useRouter } from "vue-router";
import { ArrowRightOnRectangleIcon, StarIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  teamId: {
    type: String,
  },
  teamName: {
    type: String,
  },
  teamLogo: {
    type: String,
  },
  teamAbbr: {
    type: String,
  }
})

const emit = defineEmits(["goTeamPage"])

const router = useRouter();
const goTeamPage = (teamId, team) => {
  router.push({
    path: `/:${teamId}/:${team}`,
    name: `teamOverview`,
    params: { id: teamId, team: team }
  })
}



</script>

<template>
  <div>
    <div class="flex flex-1 flex-col p-8">
      <img class="mx-auto h-32 w-32 flex-shrink-0" :src="props.teamLogo" :alt="`${props.teamAbbr} logo`" />
      <h3 class="mt-6 text-md font-medium text-gray-900">{{ teamName }}</h3>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="flex w-0 flex-1">
          <a class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-950 hover:text-gray-50">
            <ArrowRightOnRectangleIcon class="h-5 w-5 text-gray-400" aria-hidden="true" @click="goTeamPage(props.teamId, props.teamAbbr)" />
            Team Page
          </a>
        </div>
        <div class="-ml-px flex w-0 flex-1">
          <a class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            <StarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            Favorite
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>