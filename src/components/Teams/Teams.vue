<script setup>
import TeamCard from '@/components/Teams/TeamCard.vue'
import useTeam from '@/composables/useTeam.js';


const { getListTeams } = useTeam('nfl');
const teamList = await getListTeams();

const teams = teamList.sports[0].leagues[0].teams

</script>

<template>
  <div>
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <TeamCard 
        v-for="team in teams"
        :key="team.team.id"
        :teamId="team.team.id"
        :teamName="team.team.displayName"
        :teamLogo="team.team.logos[0].href"
        :teamAbbr="team.team.abbreviation"
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>