<script setup>
const props = defineProps({
  eventId: {
    type: String,
  },
  eventDate: {
    type: String,
  },
  eventInfo: {
    type: Object,
  },
  score: {
    type: Object,
  },
  logos: {
    type: Object,
  },
  teamNames: {
    type: Object,
  }
});

</script>

<template>
  <div class="pb-4">
    <div 
      v-if="props.eventDate === 'Final'"
      class="flex flex-col items-center justify-center font-bold text-xl"
    >
      <span class="italic">{{ props.eventDate }}</span>
      <div class="flex flex-row text-4xl">
        <h1 class="px-4">{{ props.score.awayScore }}</h1>
        <p class="">-</p>
        <h1 class="px-4">{{ props.score.homeScore }}</h1>
      </div>
    </div>
    <div 
      v-else
      class="flex items-center justify-center font-bold text-xl"
    >
      {{ props.eventDate }}
    </div>
    <div class="flex items-center justify-center text-ll">
      {{ props.eventInfo.venue.fullName }} - {{ props.eventInfo.venue.address.city }}, {{ props.eventInfo.venue.address.state }}
    </div>
  </div>
  <div class="grid grid-cols-2 gap-6 border-b-2">
    <!-- Away Team -->
    <div class="grid justify-center">
      <div class="flex flex-col gap-2">
        <div class="grid drop-shadow-lg justify-center">
          <img class="grid h-14 w-14 justify-items-end" :src="props.logos.awayLogo" :alt="`${props.teamNames.awayTeam} logo`" />
        </div>
        <div class="text-justify font-black">
          {{ props.teamNames.awayTeam }}
        </div>
      </div>
    </div>
    <!-- Home Team -->
    <div class="grid justify-center">
      <div class="flex flex-col gap-2">
        <div class="grid drop-shadow-lg justify-center">
          <img class="grid h-14 w-14 justify-items-end" :src="props.logos.homeLogo" :alt="`${props.teamNames.homeTeam} logo`" />
        </div>
        <div class="text-justify font-black">
          {{ props.teamNames.homeTeam }}
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>