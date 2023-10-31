import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home';
import Login from '@/views/Login';
import Site from '@/views/Site';

const routes = [
  {
    path: '/',
    component: Site,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  // history: createWebHashHistory(), /* requisição é feita apenas para o index em todos os routes mais chances de o server aceitar a requisição */
  history: createWebHistory(), /* requisição é feita com o link da rota embutido, precisamos fazer config de reescrita de url no server */
  // se for utilizado modo webHistory, precisa ser configurado no servidor para ele receber as requisições, documentação sobre isso pode ser achada na doc do vue 
  routes
})

export default router;