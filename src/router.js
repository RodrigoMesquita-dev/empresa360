import { createRouter, createWebHistory } from 'vue-router';

// import Home from '@/views/Home';
// import Login from '@/views/Login';
// import Site from '@/views/Site';
// import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada';
// import Vendas from '@/components/vendas/Vendas.vue';
// import VendasPadrao from '@/components/vendas/VendasPadrao.vue';
// import Leads from '@/components/vendas/Leads.vue';
// import Lead from '@/components/vendas/Lead.vue'
// import Servicos from '@/components/servicos/Servicos.vue';
// import Servico from '@/components/servicos/Servico.vue';
// import Indicadores from '@/components/servicos/Indicadores.vue';
// import Opcoes from '@/components/servicos/Opcoes.vue';
// import Contratos from '@/components/vendas/Contratos.vue';
// import Dashboard from '@/components/dashboard/Dashboard.vue';
// import DashboardRodape from '@/components/dashboard/DashboardRodape.vue';

// lazy Loading
const Contratos = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Contratos.vue');
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/Dashboard.vue');
const DashboardRodape = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/DashboardRodape.vue');

const Home = () => import('@/views/Home');
const Login = () => import('@/views/Login');
const Site = () => import('@/views/Site');
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada');
const Vendas = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Vendas.vue');
const VendasPadrao = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/VendasPadrao.vue');
const Leads = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Leads.vue');
const Lead = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Lead.vue');
const Servicos = () => import('@/components/servicos/Servicos.vue');
const Servico = () => import('@/components/servicos/Servico.vue');
const Indicadores = () => import('@/components/servicos/Indicadores.vue');
const Opcoes = () => import('@/components/servicos/Opcoes.vue');

const routes = [
  {
    path: '/',
    component: Site,
    meta: { requerAutorizacao: false } // meta field
  },
  {
    path: '/home',
    meta: { requerAutorizacao: true }, // meta field
    alias: '/app',
    component: Home,
    children: [
      {
        path: 'vendas',
        component: Vendas,
        children: [
          { path: '', component: VendasPadrao, name: 'vendas', }, // quando temos um path default com string vazia, temos que aplicar o name no component padrão
          { 
            path: 'leads',
            component: Leads,
            name: 'leads',
            beforeEnter: () => {
              console.log('before enter executado na rota leads');
            }
          },
          /* enquanto names funcionam como atalhos para router links, alias funcionam como alternativas para a url */
          {
            path: 'leads/:id/:outroParam',
            props: true,
            // props: {
            //   id: 5,
            //   outroParametro: 'pt-br'
            // },
            // props: route => {
            //   console.log(route);

            //   let teste = route.query.idioma ? route.query.idioma : route.params.outroParam

            //   return {
            //     id: 3,
            //     outroParam: teste
            //   }
            // },
            component: Lead,
            name: 'lead',
            alias: [
              '/l/:id/:outroParam',
              '/pessoa/:id/:outroParam',
              '/:id/:outroParam'
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
          {
            path: ':id',
            props: {
              default: true,
              indicadores: true,
              opcoes: true,
            },
            alias: '/s/:id',
            components: { // quando uso o barra significa que a requisição deve ser feita a partir da raiz 
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
  scrollBehavior(to, from, savedPosition) {
    // return { left: 0, top: 150 }
    // console.log(to.hash);

    console.log(savedPosition);
    if (to.hash) {
      return { el: to.hash }
    }

    return { left: 0, top: 0 }
  },
  routes
})

// guarda de rota a nivel global
router.beforeEach((to) => {
  console.log(to.meta)
  /* 
  if (meta.requerautorizacao) {
    validar
  } 
  */
})

router.beforeResolve(() => {
  console.log('guarda global before resolve')
})
// router.afterEach((to, from, next) => {
router.afterEach(() => {
  console.log('guarda de rota global executada após a conclusão da navegação');
})
export default router;