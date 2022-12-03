<template>
  <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
    <div class="row">
      <Imagem />
      <Form />
    </div>
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
