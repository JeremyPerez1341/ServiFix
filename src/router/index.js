import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "@/components/LandingView.vue";
import LoginSessionView from "@/components/LoginSessionView.vue";
import CheckInView from "@/components/CheckInView.vue";
import RecoverPasswordView from "@/components/RecoverPasswordView.vue";
import AddPublicationView from "@/components/AddPublicationView.vue";
import ProfileView from "@/components/ProfileView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/landing' // Redirigir la ruta raíz a /landing
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginSessionView
    },
    {
      path: '/check/in',
      name: 'checkin',
      component: CheckInView
    },
    {
      path: '/recover/password',
      name: 'recover',
      component: RecoverPasswordView
    },
    {
      path: '/add/publication',
      name: 'AddPublicationView',
      component: AddPublicationView
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView
    }
  ]
})

export default router
