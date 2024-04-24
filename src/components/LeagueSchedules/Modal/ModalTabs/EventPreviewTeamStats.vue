<script setup>
const props = defineProps({
  eventId: {
    type: String,
  },
  eventInfo: {
    type: Object,
  },
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <!-- Away Team/Game Stats -->
    <div class="grid justify-center col-start-1 col-span-1 py-2 border-b-2">
      <div
        v-for="stat in props.eventInfo.boxscore.teams[0].statistics"
        class="grid justify-center col-start-4 col-span-1 py-2 border-b-2 last:border-b-0"
      >
        <div class="font-bold text-sm">{{ stat.displayValue }}</div>
      </div>
    </div>
    <!-- Labels -->
    <div class="grid justify-center col-span-2 py-2 border-b-2">
      <div
        v-for="stat in props.eventInfo.boxscore.teams[0].statistics"
        class="grid justify-center col-start-4 col-span-1 py-2 border-b-2 last:border-b-0"
      >
        <div class="text-gray-500 text-sm">{{ stat.label }}</div>
      </div>
    </div>
    <!-- Home Team/Game Stats -->
    <div class="grid justify-center col-start-4 col-span-1 py-2 border-b-2 last:border-b-0">
      <div
        v-for="stat in props.eventInfo.boxscore.teams[1].statistics"
        class="grid justify-center col-start-4 col-span-1 py-2 border-b-2"
      >
        <div class="font-bold text-sm">{{ stat.displayValue }}</div>
      </div>
    </div>
  </div>

  <!-- <div class="grid grid-cols-2 gap-6">
    <div 
      v-for="team in props.eventInfo.boxscore.teams"
      class="flex flex-col gap-2"
    >
      <div 
        v-for="stat in team.statistics"
        class="flex flex-col py-2 border-b-2 last:border-b-0"
      >
        <div class="text-gray-500 text-sm">{{ stat.label }}</div>
        <div class="font-bold text-lg">{{ stat.displayValue }}</div>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped></style>
