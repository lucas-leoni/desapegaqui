<template>
  <div id="app">
    <Navbar v-if="exibir()" :notLogged="notLogged()" @logout="notLogged()" />
    <Sidebar v-if="logged()" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue';
import Sidebar from '@/components/common/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
  },
  methods: {
    exibir() {
      if (this.$route.name !== 'criarConta' && this.$route.name !== 'login') {
        return true;
      } return false;
    },
    notLogged() {
      return localStorage.getItem('userLogged') === null;
    },
    logged() {
      return localStorage.getItem('userLogged') !== null && this.$route.name !== 'home';
    },
  },
  onMounted() {
    this.exibir();
    this.notLogged();
    this.logged();
  },
};
</script>
