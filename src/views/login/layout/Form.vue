<template>
  <div class="col d-flex align-items-center justify-content-center">
    <form @submit.prevent="signIn()">
      <div class="col py-1 d-flex justify-content-center">
        <Titulo titulo="Login" />
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
                  placeholder="Insira a senha"
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
        <div class="col-12 d-flex justify-content-center">
          <button :disabled="$v.$invalid" type="submit" class="btn btn-sm btn-primary">
            Fazer Login
          </button>
        </div>
      </div>
      <div class="col py-1 d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center">
          <p>
            Ainda não tem uma conta?
            <router-link class="text-decoration-none" to="/criar-conta">
              Criar uma conta
            </router-link>
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
} from 'vuelidate/lib/validators';

export default {
  name: 'FormLogin',
  components: {
    Titulo,
  },
  data() {
    return {
      email: '',
      password: '',
      inputType: 'password',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(16),
    },
  },
  computed: {
    isPassword() {
      return this.inputType === 'password';
    },
  },
  methods: {
    signIn() {
      const data = {
        email: this.email,
        password: this.password,
      };
      api
        .post('/login', data)
        .then((response) => {
          const { _id } = response.data;
          if (data.password === response.data.password) {
            const userLogged = {
              id: _id,
              username: response.data.username,
            };
            localStorage.removeItem('userLogged');
            localStorage.setItem('userLogged', JSON.stringify(userLogged));
            console.log('User successfully logged');
            this.$router.push({ path: `/perfil/${_id}` });
          } else {
            alert('Senha Incorreta!');
          }
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
