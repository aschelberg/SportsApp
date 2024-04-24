<script setup>
import { useRoute } from 'vue-router';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';

const route = useRoute();

const navigation = [
  { name: 'Schedule', href: '/schedule' },
  { name: 'Teams', href: '/teams' },
  { name: 'Players', href: '/players' },
  { name: 'Favorites', href: '#' },
]

const leagueFilter = ref('NFL');
const updateFilter = (league) => {
  leagueFilter.value = league;
  mainFilters.find((t) => {
    if (t.name === league) {
      t.current = true;
    } else {
      t.current = false;
    }
  })
}


</script>

<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-black" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=300" alt="Your Company" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[route.path === item.href ? 'bg-blue-400 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="route.path === item.href ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
        
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-blue-200 hover:bg-blue-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500 hover:bg-opacity-75', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-gray-200">
        <div class="rounded-lg px-5 py-6 shadow sm:px-6 bg-white">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>



<style lang="scss" scoped>

</style>