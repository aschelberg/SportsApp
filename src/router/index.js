import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import TeamsView from '@/views/TeamsView.vue'
import TeamOverview from '@/views/TeamOverview.vue'
import PlayerView from '@/views/PlayerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/schedule',
      name: 'index',
      component: IndexView
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
