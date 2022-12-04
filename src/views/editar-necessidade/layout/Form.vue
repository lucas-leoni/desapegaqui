<template>
  <div class="container bg-light rounded shadow-lg mt-4 py-1">
    <form @submit.prevent="update()">
      <div class="row py-2 justify-content-center">
        <label for="titulo" class="col-11 form-label">
          <span class="fs-6">Título</span>
          <input
            type="text"
            class="form-control form-control-sm mt-1"
            id="titulo"
            placeholder="Insira um título para o seu anúncio"
            required
            minlength="3"
            v-model="$v.titulo.$model"
            :class="{ error: $v.titulo.$error, success: !$v.titulo.$error }"
          />
          <div v-if="$v.titulo.$error" class="text-danger">
            <small>Deve conter ao menos 3 caracteres</small>
          </div>
        </label>
      </div>
      <div class="row justify-content-center">
        <label for="descricao" class="col-11 form-label">
          <span class="fs-6">Descrição</span>
          <textarea
            class="form-control form-control-sm mt-1"
            id="descricao"
            placeholder="Insira uma descrição para o seu anúncio"
            rows="3"
            required
            minlength="10"
            v-model="$v.descricao.$model"
            :class="{ error: $v.descricao.$error, success: !$v.descricao.$error }"
          >
          </textarea>
          <div v-if="$v.descricao.$error" class="text-danger">
            <small>Deve conter ao menos 10 caracteres</small>
          </div>
        </label>
      </div>
      <div class="row pt-2 justify-content-center">
        <label for="categoria" class="col-11 form-label">
          <span class="fs-6">Categoria</span>
          <select
            class="form-select form-select-sm"
            required
            aria-label="categoria"
            v-model="$v.categoria.$model"
            :class="{ error: $v.categoria.$error, success: !$v.categoria.$error }"
          >
            <option value="">Selecione</option>
            <option value="Brinquedos">Brinquedos</option>
            <option value="Construção">Construção</option>
            <option value="Eletrodomésticos">Eletrodomésticos</option>
            <option value="Higiene Pessoal">Higiene Pessoal</option>
            <option value="Itens para Pets">Itens para Pets</option>
            <option value="Livros">Livros</option>
            <option value="Mantimentos">Mantimentos</option>
            <option value="Móveis">Móveis</option>
            <option value="Outros">Outros</option>
            <option value="Produtos de Limpeza">Produtos de Limpeza</option>
            <option value="Roupas">Roupas</option>
          </select>
          <div v-if="$v.categoria.$error" class="text-danger">
            <small>Categoria requerida</small>
          </div>
        </label>
      </div>
      <div class="row py-2 justify-content-center">
        <div class="col-11 d-flex justify-content-between">
          <button @click="limpar" type="button" class="btn btn-sm btn-secondary">Cancelar</button>
          <button :disabled="$v.$invalid" type="submit" class="btn btn-sm btn-primary">
            Anunciar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import api from '@/api';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'FormEditarAnuncio',
  data() {
    return {
      titulo: '',
      descricao: '',
      categoria: '',
      type: 'necessity',
      status: 'active',
      user: '',
    };
  },
  validations: {
    titulo: {
      required,
      minLength: minLength(3),
    },
    descricao: {
      required,
      minLength: minLength(10),
    },
    categoria: {
      required,
    },
  },
  methods: {
    getUserLogged() {
      let userStorage = localStorage.getItem('userLogged');
      userStorage = JSON.parse(userStorage);
      this.user = userStorage.id;
    },
    update() {
      const data = {
        title: this.titulo,
        description: this.descricao,
        category: this.categoria,
        type: this.type,
        status: this.status,
        user: this.user,
      };
      const { id } = this.$route.params;
      api
        .put(`/announcement/${id}`, data)
        .then(() => {
          this.getData();
          console.log('Announcement successfully updated');
          alert('Dados atualizados!');
          this.$router.push('/minhas-necessidades');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      const { id } = this.$route.params;
      api
        .get(`/announcement/${id}`)
        .then((response) => {
          this.titulo = response.data.title;
          this.descricao = response.data.description;
          this.categoria = response.data.category;
          console.log('Data successfully getted');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    limpar() {
      this.titulo = '';
      this.descricao = '';
      this.categoria = '';
    },
  },
  mounted() {
    this.getUserLogged();
    this.getData();
  },
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
</style>
