<template>
  <div class="container-fluid row align-items-center p-0">
    <Imagem />
    <Form />
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
