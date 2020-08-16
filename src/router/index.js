import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Resultado from '@/views/Resultado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/user/:user',
    name: 'Resultado',
    component: Resultado
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  routes
})

export default router
