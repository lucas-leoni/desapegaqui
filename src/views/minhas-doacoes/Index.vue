<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Minhas Doações" class="px-3" />
    <Filtro class="px-3" />
    <div class="container-fluid px-1">
      <div class="row">
        <CardMeuAnuncio />
        <CardMeuAnuncio />
        <CardMeuAnuncio />
        <CardMeuAnuncio />
        <CardMeuAnuncio />
        <CardMeuAnuncio />
        <CardMeuAnuncio />
        <CardMeuAnuncio />
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Filtro from '@/components/Filtro.vue';
import CardMeuAnuncio from '@/components/CardMeuAnuncio.vue';

export default {
  name: 'MinhasDoacoes',
  components: {
    Titulo,
    Filtro,
    CardMeuAnuncio,
  },
};
</script>
