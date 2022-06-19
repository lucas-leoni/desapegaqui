<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Login" />
    <Form />
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Form from '@/views/login/Form.vue';

export default {
  name: 'LoginView',
  components: {
    Titulo,
    Form,
  },
};
</script>
