<script setup>
import { useRoute, useRouter } from "vue-router";
import TeamPage from '@/components/Teams/Team/TeamPage.vue' 

const route = useRoute();

console.log(route.params.id)
</script>

<template>
    <TeamPage 
    :key="route.params.id"
    :teamId="route.params.id"
    >
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <component :is="Component"></component>
            <!-- loading state -->
            <template #fallback> Loading... </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </TeamPage>
</template>

<style lang="scss" scoped>

</style>