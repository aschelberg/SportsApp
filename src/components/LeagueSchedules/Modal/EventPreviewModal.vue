<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import useEvent from "@/composables/useEvent.js";
import useTeam from "@/composables/useTeam.js";

import EventPreviewModalHeader from '@/components/LeagueSchedules/Modal/EventPreviewModalHeader.vue';
import EventPreviewTeamStats from '@/components/LeagueSchedules/Modal/ModalTabs/EventPreviewTeamStats.vue';
import EventPreviewTeamInjuries from '@/components/LeagueSchedules/Modal/ModalTabs/EventPreviewTeamInjuries.vue';
import EventPreviewGameDetails from '@/components/LeagueSchedules/Modal/ModalTabs/EventPreviewGameDetails.vue';

const props = defineProps({
  eventId: {
    type: String,
  },
  name: {
    type: String,
  },
  league: {
    type: String,
  },
  competitors: {
    type: Object,
  },
  active: {
    type: Boolean,
    default: false,
  },
  scheduleEntry: {
    type: Object,
  }
});

const tabs = [
  { name: 'Team Stats', href: '#', current: true },
  { name: 'Injuries', href: '#', current: false },
  { name: 'Game Details', href: '#', current: false },
]
const eventComponent = ref('Team Stats');
const updateComponent = (tab) => {
  eventComponent.value = tab;
  tabs.find((t) => {
    if (t.name === tab) {
      t.current = true;
    } else {
      t.current = false;
    }
  })
}

defineEmits(["close-modal"]);

const { getEventMatchup } = useEvent(props.eventId, props.league);
const eventMatchup = ref(null);
eventMatchup.value = await getEventMatchup();

const { getTeamRoster } = useTeam(props.league)
const awayTeamRoster = ref([])
const homeTeamRoster = ref([])

awayTeamRoster.value = await getTeamRoster(props.competitors[1].id)
homeTeamRoster.value = await getTeamRoster(props.competitors[0].id)

</script>

<template>
  <TransitionRoot as="template" :show="active">
    <Dialog as="div" class="relative z-10" @click="$emit('close-modal')">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="$emit('close-modal')">
                  <span class="block sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <EventPreviewModalHeader
                  :key="eventMatchup.header.id"
                  :eventId="eventMatchup.header.id"
                  :eventDate="eventMatchup.header.competitions[0].status.type.detail"
                  :eventInfo="eventMatchup.gameInfo"
                  :score="{awayScore: competitors[1].score, homeScore: competitors[0].score}"
                  :logos="{awayLogo: competitors[1].team.logo, homeLogo: competitors[0].team.logo}"
                  :teamNames="{awayTeam: competitors[1].team.displayName, homeTeam: competitors[0].team.displayName}"
              />

              <div class="mb-4">
                <div class="sm:hidden">
                  <label for="tabs" class="sr-only">Select a tab</label>
                  <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                  <select id="tabs" name="tabs" 
                    class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option 
                      v-for="tab in tabs" :key="tab.name" :selected="tab.current" @click="updateComponent(tab.name)"
                    >
                      {{ tab.name }}
                    </option>
                  </select>
                </div>
                <div class="hidden sm:block">
                  <div class="border-b border-gray-200">
                    <nav class="-mb-px flex justify-between" aria-label="Tabs">
                      <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined"
                      @click="updateComponent(tab.name)"
                      >{{ tab.name }}</a>
                    </nav>
                  </div>
                </div>
              </div>

              <EventPreviewTeamStats
                v-show="eventComponent === 'Team Stats'"
                :key="props.eventId"
                :eventId="props.eventId"
                :eventInfo="eventMatchup"
              />
              
              <EventPreviewTeamInjuries
                v-show="eventComponent === 'Injuries'"
                :key="props.eventId"
                :eventId="props.eventId"
                :awayTeam="awayTeamRoster"
                :homeTeam="homeTeamRoster"
              />

              <EventPreviewGameDetails
                v-show="eventComponent === 'Game Details'"
                :key="props.eventId"
                :eventId="props.eventId"
                :eventDetails="props.scheduleEntry"
              />

            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="scss" scoped>

</style>