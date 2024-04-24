<script setup>
const props = defineProps({
  eventId: {
    type: String,
  },
  awayTeam: {
    type: Object,
  },
  homeTeam: {
    type: Object,
  },
});

const awayInjuries = () => {
  return props.awayTeam.athletes.filter((t) => {
    return t.injuries.length > 0;
  });
};
const homeInjuries = () => {
  return props.homeTeam.athletes.filter((t) => {
    return t.injuries.length > 0;
  });
};

</script>

<template>
  <div class="grid grid-cols-2 gap-8">

    <div>
      <div class="grid grid-cols-6 my-2 border-b-2" v-for="player in awayInjuries()">
        <p class="col-start-1 col-span-1">{{ player.position.abbreviation }}</p>
        <p class="col-start-2 col-span-4">{{ player.firstName[0] }} {{ player.lastName }}</p>
        <p class="col-start-6 col-span-1">{{ player.injuries[0].type.abbreviation }}</p>
      </div>
    </div>

    <div>
      <div class="grid grid-cols-6 py-1 border-b-2" v-for="player in homeInjuries()">
        <p class="grid col-start-1 col-span-1 justify-items-end">{{ player.position.abbreviation }}</p>
        <p class="grid col-start-2 col-span-4 pl-4">{{ player.firstName[0] }} {{ player.lastName }}</p>
        <p class="grid col-start-6 col-span-1 justify-items-end">{{ player.injuries[0].type.abbreviation }}</p>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped></style>
