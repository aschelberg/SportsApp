import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import TeamsView from '@/views/Team/TeamsView.vue'
import TeamOverview from '@/views/Team/TeamOverview.vue'
import PlayerView from '@/views/PlayerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },{
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView,
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView,
    },
    {
      path: '/teams/:id/:team',
      name: 'teamOverview',
      component: TeamOverview,
    },
    {
      path: '/players',
      name: 'players',
      component: PlayerView,
    },
    
  ],
});

export default router
