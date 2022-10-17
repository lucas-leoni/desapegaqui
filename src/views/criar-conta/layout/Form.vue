<template>
  <div class="col">
    <div class="row py-1 justify-content-center">
      <div class="col-6 d-flex justify-content-center">
        <Titulo titulo="Criar conta" />
      </div>
    </div>
    <form @submit.prevent="checkForm" class="needs-validation" novalidate>
      <div class="row py-1 justify-content-center">
        <div class="col-6">
          <div class="row justify-content-center">
            <label for="validationNomeUsuario" class="form-label row">
              <span class="fs-5">Nome de usuário</span>
              <div class="col-11">
                <input
                  type="text"
                  class="form-control mt-1"
                  id="validationNomeUsuario"
                  placeholder="Insira um nome de usuário"
                  required
                  minlength="3"
                  v-model="username"
                />
                <div class="invalid-feedback">Nome de usuário obrigatório</div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="row py-1 justify-content-center">
        <div class="col-6">
          <div class="row justify-content-center">
            <label for="validationEmail" class="form-label row">
              <span class="fs-5">Email</span>
              <div class="col-11">
                <input
                  type="email"
                  class="form-control mt-1"
                  id="validationEmail"
                  placeholder="Exemplo@email.com"
                  required
                  minlength="6"
                  v-model="email"
                />
                <div class="invalid-feedback">Email obrigatório</div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="row py-1 justify-content-center">
        <div class="col-6">
          <div class="row justify-content-center">
            <label for="validationSenha" class="form-label row">
              <span class="fs-5">Senha</span>
              <div class="col-10">
                <input
                  :type="inputType"
                  minlength="8"
                  maxlength="16"
                  class="senha form-control mt-1"
                  id="validationPassword"
                  placeholder="Insira uma senha"
                  required
                  v-model="password"
                />
                <div id="feedback-password" class="invalid-feedback">Senha obrigatória</div>
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
      <div class="row py-1 justify-content-center">
        <div class="col-6">
          <div class="row justify-content-center">
            <label for="validationConfirmarSenha" class="form-label row">
              <span class="fs-5">Confimar senha</span>
              <div class="col-10">
                <input
                  :type="inputType"
                  minlength="8"
                  maxlength="16"
                  class="confirmar-senha form-control mt-1"
                  id="validationPasswordConfirm"
                  placeholder="Confirme a senha"
                  required
                  v-model="password_confirm"
                />
                <div id="feedback-password-confirm" class="invalid-feedback">
                  Confirmação de senha obrigatória
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
      <div class="row py-1 justify-content-center">
        <div class="col-6 d-flex justify-content-center">
          <button :disabled="isDisableButton" type="submit" class="btn btn-primary">
            Criar Conta
          </button>
        </div>
      </div>
      <div class="row py-1 justify-content-center">
        <div class="col-6 d-flex justify-content-center">
          <p>
            Já possui uma conta?
            <router-link class="text-decoration-none" to="/login"> Fazer login </router-link>
          </p>
        </div>
      </div>
    </form>
    <div
      v-if="showErrorMessage"
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {{ mensageError }}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div
      v-if="showErrorMessage"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Error</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">{{ mensageError }}</div>
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import api from '@/api';

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
      mensageError: '',
      showErrorMessage: false,
    };
  },
  computed: {
    isPassword() {
      return this.inputType === 'password';
    },
    isEmptyName() {
      return !this.username;
    },
    isEmptyEmail() {
      return !this.email;
    },
    isDisableButton() {
      return this.isEmptyName === this.isEmptyEmail;
    },
  },
  methods: {
    checkForm() {
      if (this.password !== this.password_confirm) {
        console.log('Erro');
        this.showErrorMessage = true;
        this.mensageError = 'Password inválido';
        return;
      }
      this.save();
      console.log('checkForm');
    },
    save() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      api
        .post('/user', data)
        .then(() => {
          console.log('User successfully registered');
          this.$router.push({ path: '/perfil' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validation() {
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
    togglePassword() {
      if (this.isPassword) {
        this.inputType = 'text';
      } else {
        this.inputType = 'password';
      }
    },
  },
  mounted() {
    this.validation();
  },
};
</script>
