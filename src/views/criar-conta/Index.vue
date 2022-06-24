<template>
  <div class="container-fluid row align-items-center p-0">
    <Imagem />
    <Form />
  </div>
</template>

<script>
import Imagem from '@/views/criar-conta/Imagem.vue';
import Form from '@/views/criar-conta/Form.vue';

export default {
  name: 'CriarContaView',
  components: {
    Imagem,
    Form,
  },
};
</script>
