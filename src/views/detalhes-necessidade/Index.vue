<template>
  <div class="container mt-5 py-5 px-0">
    <AnuncioDetalhado />
  </div>
</template>

<script>
import AnuncioDetalhado from '@/components/AnuncioDetalhado.vue';

export default {
  name: 'DetalhesNecessidade',
  components: {
    AnuncioDetalhado,
  },
};
</script>
