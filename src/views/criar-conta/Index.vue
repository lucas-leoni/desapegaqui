<template>
  <div class="container py-5 px-0">
    <div class="container col-8 p-0">
      <Titulo titulo="Criar Conta" />
    </div>
    <Form />
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Form from '@/views/criar-conta/Form.vue';

export default {
  name: 'CriarContaView',
  components: {
    Titulo,
    Form,
  },
};
</script>
