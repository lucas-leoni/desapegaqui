<template>
  <div id="app">
    <Navbar v-if="exibir()" :notLogged="notLogged()" @logout="notLogged()" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
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
  },
  onMounted() {
    this.exibir();
    this.notLogged();
  },
};
</script>
