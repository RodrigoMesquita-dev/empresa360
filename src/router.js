import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home';
import Login from '@/views/Login';
import Site from '@/views/Site';
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada';
import Vendas from '@/components/vendas/Vendas.vue';
import VendasPadrao from '@/components/vendas/VendasPadrao.vue';
import Leads from '@/components/vendas/Leads.vue';
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue';
import Servicos from '@/components/servicos/Servicos.vue';
import Servico from '@/components/servicos/Servico.vue';
import Indicadores from '@/components/servicos/Indicadores.vue';
import Opcoes from '@/components/servicos/Opcoes.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue';

const routes = [
  {
    path: '/',
    component: Site,
  },
  {
    path: '/home',
    alias: '/app',
    component: Home,
    children: [
      {
        path: 'vendas',
        component: Vendas,
        children: [
          { path: '', component: VendasPadrao, name: 'vendas', }, // quando temos um path default com string vazia, temos que aplicar o name no component padrão
          { path: 'leads', component: Leads, name: 'leads' },
          /* enquanto names funcionam como atalhos para router links, alias funcionam como alternativas para a url */
          {
            path: 'leads/:id/:outroParam',
            props: true,
            component: Lead,
            name: 'lead',
            alias: [
              '/l/:id/:outroParam',
              '/pessoa/:id/:outroParam'
            ]
          }, // posso definir um array de alias para a rota e chamar ela por cada um 
          { path: 'contratos', component: Contratos, name: 'contratos' },
        ]
      },
      {
        path: 'servicos',
        component: Servicos,
        name: 'abc',
        children: [
          { path: ':id', alias: '/s/:id', components: // quando uso o barra significa que a requisição deve ser feita a partir da raiz 
            {
              default: Servico,
              opcoes: Opcoes ,
              indicadores: Indicadores,
            },
          name: 'servico' },
        ]
      },
      {
        path: 'dashboard',
        components: {
          default: Dashboard,
          rodape: DashboardRodape,
        },
      }, // redirecionamento de rotas
      { path: '/redirecionamento-1', redirect: '/home/servicos' },
      { path: '/redirecionamento-2', redirect: { name: 'leads' } },
      { path: '/redirecionamento-3', redirect: '/home/vendas' },
      { path: '/redirecionamento-4', redirect: { name: 'vendas' } },
      { path: '/redirecionamento-5', redirect: to => {
          //podemos programar algo antes do redirecionamento acontecer.
          console.log(to);
          // return '/home/vendas';
          return { name: 'vendas' };
        } 
      },
      // { path: '/:catchAll(.*)*', redirect: '/' } // vue2
      { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }
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