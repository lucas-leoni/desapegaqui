<template>
  <div class="container bg-light rounded shadow-lg mt-5 py-3">
    <form @submit.prevent="save()">
      <div class="row py-4 justify-content-center">
        <label for="titulo" class="col-11 form-label">
          <span class="fs-5">Título</span>
          <input
            type="text"
            class="form-control mt-1"
            id="titulo"
            placeholder="Insira um título para o seu anúncio"
            required
            minlength="3"
            v-model="$v.titulo.$model"
            :class="{ error: $v.titulo.$error, success: !$v.titulo.$error }"
          />
          <div v-if="$v.titulo.$error" class="text-danger">Deve conter ao menos 3 caracteres</div>
        </label>
      </div>
      <div class="row justify-content-center">
        <label for="descricao" class="col-11 form-label">
          <span class="fs-5">Descrição</span>
          <textarea
            class="form-control mt-1"
            id="descricao"
            placeholder="Insira uma descrição para o seu anúncio"
            rows="4"
            required
            minlength="10"
            v-model="$v.descricao.$model"
            :class="{ error: $v.descricao.$error, success: !$v.descricao.$error }"
          >
          </textarea>
          <div v-if="$v.descricao.$error" class="text-danger">
            Deve conter ao menos 10 caracteres
          </div>
        </label>
      </div>
      <div class="row py-4 justify-content-center">
        <label for="categoria" class="col-11 form-label">
          <span class="fs-5">Categoria</span>
          <select
            class="form-select"
            required
            aria-label="categoria"
            v-model="$v.categoria.$model"
            :class="{ error: $v.categoria.$error, success: !$v.categoria.$error }"
          >
            <option value="">Selecione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div v-if="$v.categoria.$error" class="text-danger">Categoria requerida</div>
        </label>
      </div>
      <div class="row justify-content-center">
        <label for="imagem" class="col-11 form-label">
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
          <button :disabled="$v.$invalid" type="submit" class="btn btn-primary">Anunciar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import api from '@/api';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'FormAnuncio',
  data() {
    return {
      titulo: '',
      descricao: '',
      categoria: '',
      type: 'donation',
      user: '6335de74c2b79def9b3ce1da',
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
    save() {
      const data = {
        title: this.titulo,
        description: this.descricao,
        category: this.categoria,
        type: this.type,
        user: this.user,
      };
      api
        .post('/announcement', data)
        .then(() => {
          console.log('Announcement successfully saved');
          this.$router.push({ path: '/minhas-doacoes' });
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
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
</style>
