<script setup>
import { ref, computed } from 'vue';
import dayjs from 'dayjs';
import useTeam from '@/composables/useTeam.js';

const props = defineProps({
  teamStats: {
    type: Object,
  }
})

const currentYear = 2023;
const yearFilter = ref(currentYear);

const totalStats = [];

const passingStatCats = [
  "Completion Percentage",
  "Completions",
  "Interceptions",
  "Passing Attempts",
  "Passing Touchdowns",
  "Passing Yards",
  "Passing Yards After Catch",
  "Passing Yards Per Game",
  "Total Sacks",
  "Yards Per Game",
  "Quarterback Rating"
];

const rushingStatsCats = [
  "Average Gain",
  "Rushing Attempts",
  "Rushing Fumbles",
  "Rushing Touchdowns",
  "Rushing Yards",
  "Rushing Yards Per Game",
  "Yards Per Rush Attempt",
];

const defensiveStatsCats = [
  "Defensive Touchdown",
  "Sacks",
  "Sack Yards",
  "Total Tackles",
  "Yards Allowed",
  "Points Allowed",
  "Interceptions"
];

console.log(props.teamStats);

const passing = props.teamStats[1]
const rushing = props.teamStats[2]
// const receiving = props.teamStats[3]
const defensive = props.teamStats[4]

</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 mx-auto flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">

          <h1 class="text-xl text-center font-semibold leading-6 text-gray-900">Offense</h1>

          <h2>Passing</h2>
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th  v-for="cat in passing.stats" :key="passing.abbreviation" scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">{{ cat.shortDisplayName }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr >
                <td v-for="value in passing.stats" :key="passing.abbreviation" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ value.value }}</td>
              </tr>
            </tbody>
          </table>

          <br>

          <h2>Rushing</h2>
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th  v-for="cat in rushing.stats" :key="rushing.abbreviation" scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">{{ cat.shortDisplayName }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr >
                <td v-for="value in rushing.stats" :key="rushing.abbreviation" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ value.value }}</td>
              </tr>
            </tbody>
          </table>

          <!-- <br>

          <h2>Receiving</h2>
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th  v-for="cat in receiving.stats" :key="receiving.abbreviation" scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">{{ cat.shortDisplayName }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr >
                <td v-for="value in receiving.stats" :key="receiving.abbreviation" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ value.value }}</td>
              </tr>
            </tbody>
          </table> -->

          <br>

          <h2>Defense</h2>
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th  v-for="cat in defensive.stats" :key="defensive.abbreviation" scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">{{ cat.shortDisplayName }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr >
                <td v-for="value in defensive.stats" :key="defensive.abbreviation" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ value.value }}</td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>