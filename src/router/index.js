import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/home/Index.vue';
import DoarView from '@/views/doar/Index.vue';
import CadastrarNecessidadeView from '@/views/cadastrar-necessidade/Index.vue';
import DoacoesView from '@/views/doacoes/Index.vue';
import DetalhesDoacao from '@/views/detalhes-doacao/Index.vue';
import NecessidadesView from '@/views/necessidades/Index.vue';
import DetalhesNecessidade from '@/views/detalhes-necessidade/Index.vue';
import CriarContaView from '@/views/criar-conta/Index.vue';
import LoginView from '@/views/login/Index.vue';
import PerfilView from '@/views/perfil/Index.vue';
import MinhasDoacoesView from '@/views/minhas-doacoes/Index.vue';
import MinhasNecessidadesView from '@/views/minhas-necessidades/Index.vue';
import FavoritosView from '@/views/favoritos/Index.vue';
import EditarDoacaoView from '@/views/editar-doacao/Index.vue';
import EditarNecessidadeView from '@/views/editar-necessidade/Index.vue';
import DoacoesRealizadasView from '@/views/doacoes-realizadas/Index.vue';
import DetalhesDoacaoRealizada from '@/views/detalhes-doacao-realizada/Index.vue';

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
    path: '/perfil/:id',
    name: 'perfil',
    component: PerfilView,
  },
  {
    path: '/minhas-doacoes',
    name: 'minhasDoacoes',
    component: MinhasDoacoesView,
  },
  {
    path: '/minhas-necessidades',
    name: 'minhasNecessidades',
    component: MinhasNecessidadesView,
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: FavoritosView,
  },
  {
    path: '/editar-doacao/:id',
    name: 'editarDoacao',
    component: EditarDoacaoView,
  },
  {
    path: '/editar-necessidade/:id',
    name: 'editarNecessidade',
    component: EditarNecessidadeView,
  },
  {
    path: '/doacoes-realizadas',
    name: 'doacoesRealizadas',
    component: DoacoesRealizadasView,
  },
  {
    path: '/doacao-realizada/:id',
    name: 'detalhesDoacaoRealizada',
    component: DetalhesDoacaoRealizada,
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
