import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DoarView from '@/views/DoarView.vue';
import CadastrarNecessidadeView from '@/views/CadastrarNecessidadeView.vue';
import DoacoesView from '@/views/DoacoesView.vue';
import DetalhesDoacao from '@/views/DetalhesDoacao.vue';
import NecessidadesView from '@/views/NecessidadesView.vue';
import DetalhesNecessidade from '@/views/DetalhesNecessidade.vue';
import ContatoView from '@/views/ContatoView.vue';
import CriarContaView from '@/views/CriarContaView.vue';
import LoginView from '@/views/LoginView.vue';
import PerfilView from '@/views/PerfilView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/doar',
    name: 'doar',
    component: DoarView,
  },
  {
    path: '/cadastrar-necessidade',
    name: 'cadastrarNecessidade',
    component: CadastrarNecessidadeView,
  },
  {
    path: '/doacoes',
    name: 'Doacoes',
    component: DoacoesView,
  },
  {
    path: '/doacao/:id',
    name: 'DetalhesDoacao',
    component: DetalhesDoacao,
  },
  {
    path: '/necessidades',
    name: 'Necessidades',
    component: NecessidadesView,
  },
  {
    path: '/necessidade/:id',
    name: 'DetalhesNecessidade',
    component: DetalhesNecessidade,
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContatoView,
  },
  {
    path: '/criar-conta',
    name: 'criarConta',
    component: CriarContaView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return {};
  },
});

export default router;
