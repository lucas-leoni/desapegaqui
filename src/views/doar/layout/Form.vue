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
            minlength="3"
            v-model="doacao.titulo"
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
            minlength="10"
            v-model="doacao.descricao"
          >
          </textarea>
          <div class="invalid-feedback">Descrição obrigatória</div>
        </label>
      </div>
      <div class="row py-4 justify-content-center">
        <label for="validationCategoria" class="col-11 form-label">
          <span class="fs-5">Categoria</span>
          <select class="form-select" required aria-label="categoria" v-model="doacao.categoria">
            <option value="">Selecione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div class="invalid-feedback">Categoria obrigatória</div>
        </label>
      </div>
      <div class="row justify-content-center">
        <label for="validationCategoria" class="col-11 form-label">
          <div class="row justify-content-center">
            <div class="col-4 d-flex justify-content-center">
              <span class="fs-5">Imagem</span>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-4">
              <input type="file" class="form-control mt-1" aria-label="imagem" accept="image/*" />
            </div>
          </div>
        </label>
      </div>
      <div class="row py-4 justify-content-center">
        <div class="col-11 d-flex justify-content-between">
          <button @click="limpar" class="btn btn-secondary" type="button">Cancelar</button>
          <button @click="save" class="btn btn-primary" type="submit">Anunciar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'FormAnuncio',
  data() {
    return {
      doacao: {
        titulo: '',
        descricao: '',
        categoria: '',
        type: 'donation',
        user: '6335de74c2b79def9b3ce1da',
      },
    };
  },
  methods: {
    save() {
      const data = {
        title: this.doacao.titulo,
        description: this.doacao.descricao,
        category: this.doacao.categoria,
        type: this.doacao.type,
        user: this.doacao.user,
      };
      if (
        this.notNull() === true
        && this.lengthValidation() === true
      ) {
        api
          .post('/announcement', data)
          .then(() => {
            console.log('Announcement successfully saved');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    limpar() {
      this.doacao.titulo = '';
      this.doacao.descricao = '';
      this.doacao.categoria = '';
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
    notNull() {
      if (
        this.doacao.titulo !== ''
        && this.doacao.descricao !== ''
        && this.doacao.categoria !== ''
      ) {
        return true;
      }
      return false;
    },
    lengthValidation() {
      if (
        this.doacao.titulo.length >= 3
        && this.doacao.descricao.length >= 10
      ) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.validacao();
  },
};
</script>
