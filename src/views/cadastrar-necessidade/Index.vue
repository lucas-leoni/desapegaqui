<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Cadastre sua necessidade" />
    <FormAnuncio :exibir="false" />
  </div>
</template>

<script>
import FormAnuncio from '@/components/FormAnuncio.vue';
import Titulo from '@/components/common/Titulo.vue';

export default {
  name: 'CadastrarNecessidadeView',
  components: {
    FormAnuncio,
    Titulo,
  },
};
</script>
