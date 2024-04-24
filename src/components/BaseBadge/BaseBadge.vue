<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  type: {
    type: String
  }
})
</script>

<template>
  <div 
    class="flex items-center"
  >
    <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{ props.text }}</span>
  </div>
</template>

<style lang="scss" scoped>

</style>