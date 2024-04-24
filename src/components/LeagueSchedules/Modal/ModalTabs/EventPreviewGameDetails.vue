<script setup>
import dayjs from "dayjs";

const props = defineProps({
  eventId: {
    type: String,
  },
  eventDetails: {
    type: Object,
  },
});

</script>

<template>
  <div class="flex flex-col justify-center">
    <h1 class="grid justify-center">{{ eventDetails.name }}</h1>
    <p class="grid justify-center" v-if="eventDetails.weather">
      {{ eventDetails.weather.displayValue }},
      {{ eventDetails.weather.temperature }}&deg
    </p>
    <p class="grid justify-center">on {{ eventDetails.competitions[0].geoBroadcasts[0].media.shortName }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
