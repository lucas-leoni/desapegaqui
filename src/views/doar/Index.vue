<template>
  <div class="container py-4 px-5">
    <Titulo titulo="Cadastre sua doação" />
    <Form />
  </div>
</template>

<script>
import Form from '@/views/doar/layout/Form.vue';
import Titulo from '@/components/common/Titulo.vue';

export default {
  name: 'DoarView',
  components: {
    Form,
    Titulo,
  },
};
</script>
