import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClavierView from '../views/ClavierView.vue'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'
import FormulaireView from '../views/FormulaireView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clavierview',
      name: 'clavierview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ClavierView
    },
    {
      path: '/journalview',
      name: 'journalview',
      component: JournalView
    },
    {
      path: '/contactview',
      name: 'contactview',
      component: ContactView
    },
    {
      path: '/formulaireview',
      name: 'formulaireview',
      component: FormulaireView
    },
  ]
})

export default router
