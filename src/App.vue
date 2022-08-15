<template>
  <div id="app">
    <Navbar v-if="exibir()" />
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
  },
  onMounted() {
    this.exibir();
  },
};
</script>
