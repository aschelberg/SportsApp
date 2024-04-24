<script setup>
import useLeague from "@/composables/useLeague.js";
import useTeam from "@/composables/useTeam.js";
import usePlayer from "@/composables/usePlayer.js";

// nfl Giants - 19 -- Saquon Barkley - 3929630
// mlb Yankees - 10 -- Aaron Judge - 33192
// nba Warriors - 9 -- Steph Curry - 3975

const { getTeams, getSchedule } = useLeague("nfl");
const { getTeamRoster, getTeam } = useTeam("nfl");
const { getPlayerInfo, getPlayerSplit } = usePlayer("nfl");

const playerBio = await getPlayerInfo("3929630");

const playerSeasons = await getPlayerSplit("3929630");
const playerCategories = playerSeasons.categories;
console.log(playerCategories)
</script>

<template>
  <div class="mt-10 px-4 sm:px-8 lg:px-10 container">
    <!-- Player Season Totals -->
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold leading-6 text-gray-900">
          Career Totals
        </h1>
        <!-- <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p> -->
      </div>
    </div>
    <!-- Table of player stats -->
    <div>
      <div class="mt-4 flow-root">
        <div
          v-for="category in playerCategories"
          class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
        >
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <h2>
                  {{ category.displayName }}
                </h2>
                <tr>
                  <th
                    scope="col"
                    class="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    Year
                  </th>
                  <th
                    v-for="label in category.labels"
                    scope="col"
                    class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                  >
                    {{ label }}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="statistics in category.statistics">
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ statistics.season.year }}
                  </td>
                  <td
                    v-for="stats in statistics.stats"
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >
                    {{ stats }}
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
