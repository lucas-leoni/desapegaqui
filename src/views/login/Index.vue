<template>
  <div class="container-fluid row align-items-center p-0">
    <Imagem />
    <Form />
  </div>
</template>

<script>
import Imagem from '@/views/login/layout/Imagem.vue';
import Form from '@/views/login/layout/Form.vue';

export default {
  name: 'LoginView',
  components: {
    Imagem,
    Form,
  },
};
</script>
