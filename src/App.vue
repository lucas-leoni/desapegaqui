<template>
  <div id="app" class="bg-secondary">
    <Navbar />
    <div class="py-5 my-1"></div>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};

const { body } = document;
body.style.backgroundColor = '#6c757d';
</script>
