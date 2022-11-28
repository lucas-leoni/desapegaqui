<template>
  <div class="container py-4 px-5">
    <Titulo titulo="Cadastre sua necessidade" />
    <Form />
  </div>
</template>

<script>
import Form from '@/views/cadastrar-necessidade/layout/Form.vue';
import Titulo from '@/components/common/Titulo.vue';

export default {
  name: 'CadastrarNecessidadeView',
  components: {
    Form,
    Titulo,
  },
};
</script>
