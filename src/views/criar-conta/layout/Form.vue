<template>
  <div class="col d-flex align-items-center justify-content-center">
    <form @submit.prevent="save()">
      <div class="col py-1 d-flex justify-content-center">
        <Titulo titulo="Criar conta" />
      </div>
      <div class="col py-1 d-flex justify-content-center">
        <div class="col-12">
          <div class="row justify-content-center">
            <label for="username" class="form-label row">
              <span class="fs-6">Nome de usuário</span>
              <div class="col-11">
                <input
                  type="text"
                  class="form-control form-control-sm mt-1"
                  id="username"
                  placeholder="Insira um nome de usuário"
                  required
                  minlength="3"
                  v-model="$v.username.$model"
                  :class="{ error: $v.username.$error, success: !$v.username.$error }"
                />
                <div v-if="$v.username.$error" class="text-danger">
                  <small>Deve conter ao menos 3 caracteres</small>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="col py-1 d-flex justify-content-center">
        <div class="col-12">
          <div class="row justify-content-center">
            <label for="email" class="form-label row">
              <span class="fs-6">Email</span>
              <div class="col-11">
                <input
                  type="email"
                  class="form-control form-control-sm mt-1"
                  id="email"
                  placeholder="Exemplo@email.com"
                  required
                  v-model="$v.email.$model"
                  :class="{ error: $v.email.$error, success: !$v.email.$error }"
                />
                <div v-if="$v.email.$error" class="text-danger">
                  <small>Este email é inválido</small>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="col py-1 d-flex justify-content-center">
        <div class="col-12">
          <div class="row justify-content-center">
            <label for="password" class="form-label row">
              <span class="fs-6">Senha</span>
              <div class="col-11">
                <input
                  :type="inputType"
                  minlength="8"
                  maxlength="16"
                  class="senha form-control form-control-sm mt-1"
                  id="password"
                  placeholder="Insira uma senha"
                  required
                  v-model="$v.password.$model"
                  :class="{ error: $v.password.$error, success: !$v.password.$error }"
                />
                <div v-if="$v.password.$error" class="text-danger">
                  <small>Deve conter de 8 a 16 caracteres</small>
                </div>
              </div>
              <div class="col-1 d-flex align-items-start px-0 py-1">
                <button @click="togglePassword" type="button" class="btn btn-default p-0">
                  <i v-if="isPassword" class="bi bi-eye-fill fs-4"></i>
                  <i v-else class="bi bi-eye-slash-fill fs-4"></i>
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="col py-1 d-flex justify-content-center">
        <div class="col-12">
          <div class="row justify-content-center">
            <label for="password-confirm" class="form-label row">
              <span class="fs-6">Confimar senha</span>
              <div class="col-11">
                <input
                  :type="inputType"
                  minlength="8"
                  maxlength="16"
                  class="confirmar-senha form-control form-control-sm mt-1"
                  id="password-confirm"
                  placeholder="Confirme a senha"
                  required
                  v-model="$v.password_confirm.$model"
                  :class="{
                    error: $v.password_confirm.$error,
                    success: !$v.password_confirm.$error,
                  }"
                />
                <div v-if="$v.password_confirm.$error" class="text-danger">
                  <small>As senhas não coincidem</small>
                </div>
              </div>
              <div class="col-1 d-flex align-items-start px-0 py-1">
                <button @click="togglePassword" type="button" class="btn btn-default p-0">
                  <i v-if="isPassword" class="bi bi-eye-fill fs-4"></i>
                  <i v-else class="bi bi-eye-slash-fill fs-4"></i>
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="col py-1 d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center">
          <button :disabled="$v.$invalid" type="submit" class="btn btn-sm btn-primary">
            Criar Conta
          </button>
        </div>
      </div>
      <div class="col py-1 d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center">
          <p>
            Já possui uma conta?
            <router-link class="text-decoration-none" to="/login"> Fazer login </router-link>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import api from '@/api';
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: 'FormCriarConta',
  components: {
    Titulo,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirm: '',
      inputType: 'password',
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(3),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(16),
    },
    password_confirm: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(16),
      sameAs: sameAs('password'),
    },
  },
  computed: {
    isPassword() {
      return this.inputType === 'password';
    },
  },
  methods: {
    save() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      api
        .post('/user', data)
        .then((response) => {
          const { _id } = response.data;
          const userLogged = {
            id: _id,
            username: response.data.username,
          };
          localStorage.removeItem('userLogged');
          localStorage.setItem('userLogged', JSON.stringify(userLogged));
          console.log('User successfully registered');
          this.$router.push({ path: `/perfil/${_id}` });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    togglePassword() {
      if (this.isPassword) {
        this.inputType = 'text';
      } else {
        this.inputType = 'password';
      }
    },
  },
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
</style>
