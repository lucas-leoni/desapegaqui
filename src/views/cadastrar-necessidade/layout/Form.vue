<template>
  <div class="container bg-light rounded shadow-lg mt-5 py-3">
    <form class="needs-validation" novalidate>
      <div class="row py-4 justify-content-center">
        <label for="validationTitulo" class="col-11 form-label">
          <span class="fs-5">Título</span>
          <input
            type="text"
            class="form-control mt-1"
            id="validationTitulo"
            placeholder="Insira um título para o seu anúncio"
            required
            v-model="titulo"
          />
          <div class="invalid-feedback">Título obrigatório</div>
        </label>
      </div>
      <div class="row justify-content-center">
        <label for="validationDescricao" class="col-11 form-label">
          <span class="fs-5">Descrição</span>
          <textarea
            class="form-control mt-1"
            id="validationDescricao"
            placeholder="Insira uma descrição para o seu anúncio"
            rows="4"
            required
            v-model="descricao"
          >
          </textarea>
          <div class="invalid-feedback">Descrição obrigatória</div>
        </label>
      </div>
      <div class="row py-4 justify-content-center">
        <label for="validationCategoria" class="col-11 form-label">
          <span class="fs-5">Categoria</span>
          <select class="form-select" required aria-label="categoria" v-model="categoria">
            <option value="">Selecione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div class="invalid-feedback">Categoria obrigatória</div>
        </label>
      </div>
      <div class="row py-4 justify-content-center">
        <div class="col-11 d-flex justify-content-between">
          <button @click="cancelar" class="btn btn-secondary" type="button">Cancelar</button>
          <button class="btn btn-primary" type="submit">Anunciar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormAnuncio',
  data() {
    return {
      titulo: '',
      descricao: '',
      categoria: '',
    };
  },
  methods: {
    cancelar() {
      this.titulo = '';
      this.descricao = '';
      this.categoria = '';
    },
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
