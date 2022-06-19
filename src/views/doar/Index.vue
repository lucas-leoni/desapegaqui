<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Cadastre sua doação" />
    <FormAnuncio :exibir="true" />
  </div>
</template>

<script>
import FormAnuncio from '@/components/FormAnuncio.vue';
import Titulo from '@/components/common/Titulo.vue';

export default {
  name: 'DoarView',
  components: {
    FormAnuncio,
    Titulo,
  },
};
</script>
