<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Cadastre sua necessidade" />
    <FormAnuncio :exibir="false" />
  </div>
</template>

<script>
import FormAnuncio from '@/components/FormAnuncio.vue';
import Titulo from '@/components/Titulo.vue';

export default {
  name: 'CadastrarNecessidadeView',
  components: {
    FormAnuncio,
    Titulo,
  },
  methods: {
    validacao() {
      const forms = document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          'submit',
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add('was-validated');
          },
          false,
        );
      });
    },
  },
  mounted() {
    this.validacao();
  },
};
</script>
