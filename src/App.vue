<script setup>
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
</script>

<template>
  <div>
    <BaseLayout>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
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
        </template>
      </RouterView>
    </BaseLayout>
  </div>
</template>
