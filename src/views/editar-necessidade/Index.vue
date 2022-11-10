<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Edite sua necessidade" />
    <Form />
  </div>
</template>

<script>
import Form from '@/views/editar-necessidade/layout/Form.vue';
import Titulo from '@/components/common/Titulo.vue';

export default {
  name: 'EditarNecessidadeView',
  components: {
    Form,
    Titulo,
  },
};
</script>
