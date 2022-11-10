<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Edite sua doação" />
    <Form />
  </div>
</template>

<script>
import Form from '@/views/editar-doacao/layout/Form.vue';
import Titulo from '@/components/common/Titulo.vue';

export default {
  name: 'EditarDoacaoView',
  components: {
    Form,
    Titulo,
  },
};
</script>
