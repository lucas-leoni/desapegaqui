<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Doações" class="px-3" />
    <Filtro class="px-3" />
    <div class="container-fluid px-1">
      <div class="row">
        <CardAnuncio />
        <CardAnuncio />
        <CardAnuncio />
        <CardAnuncio />
        <CardAnuncio />
        <CardAnuncio />
        <CardAnuncio />
        <CardAnuncio />
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Filtro from '@/components/Filtro.vue';
import CardAnuncio from '@/components/CardAnuncio.vue';

export default {
  name: 'DoacoesView',
  components: {
    Titulo,
    Filtro,
    CardAnuncio,
  },
};
</script>
