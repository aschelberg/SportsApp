<script setup>
import useLeague from "@/composables/useLeague.js";
import useTeam from "@/composables/useTeam.js";
import usePlayer from "@/composables/usePlayer.js";
import dayjs from "dayjs";

const props = defineProps({
  teamSchedule: {
    type: Object,
  },
});



// .filter((t) => {
//   return t.seasonType.type === 2
// })

</script>

<template>
  <div class="mt-10 mx-auto px-4 sm:px-8 lg:px-10 container">
    <!-- Player Season Totals -->
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl text-center font-semibold leading-6 text-gray-900">Schedule</h1>
        <!-- <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p> -->
      </div>
    </div>
    <!-- Table of player stats -->
    <div>
      <div class="mt-4 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr class="text-center">
                  <th
                    scope="col"
                    class="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Week
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Matchup
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Score
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white text-center">
                <tr v-for="game in teamSchedule">
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ game.week.text }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ game.shortName }}
                  </td>
                  <td
                    v-if="game.competitions[0].competitors[0].score"
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >
                    {{
                      game.competitions[0].competitors[1].score.displayValue
                    }}            
                    -
                    {{ game.competitions[0].competitors[0].score.displayValue }}
                  </td>
                  <td
                    v-else
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  ></td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ dayjs(game.date).format("MMM D, YYYY") }}
                  </td>
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
