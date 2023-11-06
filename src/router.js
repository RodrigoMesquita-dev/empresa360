import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home';
import Login from '@/views/Login';
import Site from '@/views/Site';
import Vendas from '@/components/vendas/Vendas.vue';
import VendasPadrao from '@/components/vendas/VendasPadrao.vue';
import Leads from '@/components/vendas/Leads.vue';
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue';
import Servicos from '@/components/servicos/Servicos.vue';
import Servico from '@/components/servicos/Servico.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: Site,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'vendas',
        component: Vendas,
        children: [
          { path: '', component: VendasPadrao },
          { path: 'leads', component: Leads, name: 'leads' },
          { path: 'leads/:id', component: Lead, name: 'lead' },
          { path: 'contratos', component: Contratos, name: 'contratos' },
        ]
      },
      {
        path: 'servicos',
        component: Servicos,
        name: 'abc',
        children: [
          { path: ':id', component: Servico,  name: 'servico' },
        ]
      },
      {
        path: 'dashboard',
        component: Dashboard,
      }
    ]
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