<script setup>
import usePlayer from '@/composables/usePlayer.js'

const { getAllPlayers } = usePlayer('nfl');
const allPlayers = await getAllPlayers();

console.log(allPlayers)

</script>

<template>
  <div>
    Players coming soon
  </div>
</template>



<style lang="scss" scoped>

</style>