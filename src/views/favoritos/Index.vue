<template>
 <div class="container py-5 px-0">
  <Titulo titulo="Meus Favoritos" />
 </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';

export default {
  name: 'FavoritosView',
  components: {
    Titulo,
  },
};
</script>
