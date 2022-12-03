<template>
  <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
    <div class="row">
      <Imagem />
      <Form />
    </div>
  </div>
</template>

<script>
import Imagem from '@/views/criar-conta/layout/Imagem.vue';
import Form from '@/views/criar-conta/layout/Form.vue';

export default {
  name: 'CriarContaView',
  components: {
    Imagem,
    Form,
  },
};
</script>
