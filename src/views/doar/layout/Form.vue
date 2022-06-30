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
          <button class="btn btn-primary" type="submit">Anunciar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import SUPABASE_AUTH from '@/services/index';

export default {
  name: 'FormAnuncio',
  data() {
    return {
      doacao: {
        titulo: '',
        descricao: '',
        categoria: '',
      },
    };
  },
  methods: {
    criarDoacao() {
      const doacao = {
        title: this.doacao.titulo,
        description: this.doacao.descricao,
        category: this.doacao.categoria,
      };
      this.salvarDoacao(doacao);
    },
    async salvarDoacao(camposDoacao) {
      const { data, error } = await SUPABASE_AUTH
        .from('doacao')
        .insert([camposDoacao]);
      this.sucesso(data);
      this.erro(error);
    },
    sucesso(data) {
      console.log('Doação salva: ', data);
      this.limpar();
    },
    erro(error) {
      if (error) {
        console.log('Erro: ', error);
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
  },
  mounted() {
    this.validacao();
  },
};
</script>
