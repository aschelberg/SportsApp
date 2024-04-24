<script setup>
import useLeague from "@/composables/useLeague.js";
import useTeam from "@/composables/useTeam.js";
import usePlayer from "@/composables/usePlayer.js";

const props = defineProps({
  teamId: {
    type: String,
  },
});

const { getTeams, getSchedule } = useLeague("nfl");
const { getTeamRoster, getTeam } = useTeam("nfl");

const team = await getTeamRoster(props.teamId)
const roster = team.athletes

</script>

<template>
<div class="mt-10 px-4 sm:px-8 lg:px-10 container">
    <!-- Player Season Totals -->
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold leading-6 text-gray-900">
          Roster
        </h1>
        <!-- <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p> -->
      </div>
    </div>
    <!-- Table of player stats -->
    <div>
      <div class="mt-4 flow-root">
        <div
          class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
        >
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    Height
                  </th>
                  <th
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    Weight
                  </th>
                  <th
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    Experience
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="player in roster">
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ player.fullName }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >
                    {{ player.position.abbreviation }}
                  </td>  
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >
                    {{ player.age }}
                  </td> 
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >
                    {{ ~~(player.height/12) }}' {{ player.height%12 }}"
                  </td> 
                  <th
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium tracking-wide text-gray-500 sm:pl-0"
                  >
                    {{ player.weight }} lbs
                  </th>
                  <th
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium tracking-wide text-gray-500 sm:pl-0"
                  >
                    {{ player.experience.years }} yrs
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Category index ?? -->
    <!-- <div>
      <div class="mt-4 flow-root">
        <h1 class="text-xl bg-gray-500 text-white p-2">Category Index</h1>
        <div
          class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
        >
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th v-for="category in playerCategories"
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    {{ category.displayName }}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  ></td>

                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
