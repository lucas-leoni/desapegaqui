<template>
  <div class="col">
    <div class="row py-1 justify-content-center">
      <div class="col-6 d-flex justify-content-center">
        <Titulo titulo="Criar conta" />
      </div>
    </div>
    <form action="/perfil" class="needs-validation" novalidate>
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
          <button @click="save" type="submit" class="btn btn-primary">Criar Conta</button>
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
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import axios from 'axios';

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
  computed: {
    isPassword() {
      return this.inputType === 'password';
    },
  },
  methods: {
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
    notNull() {
      if (
        this.username !== ''
        && this.email !== ''
        && this.password !== ''
        && this.password_confirm !== ''
      ) {
        return true;
      }
      return false;
    },
    lengthValidation() {
      if (
        this.username.length >= 3
        && this.email.length >= 6
        && this.password.length >= 8
        && this.password.length <= 16
        && this.password_confirm.length >= 8
        && this.password_confirm.length <= 16
      ) {
        return true;
      }
      return false;
    },
    validationPassword() {
      const password = document.getElementById('validationPassword');
      const passwordConfirm = document.getElementById('validationPasswordConfirm');
      if (password.value !== passwordConfirm.value) {
        const feedback = document.getElementById('feedback-password');
        const feedback2 = document.getElementById('feedback-password-confirm');
        feedback.textContent = 'Senhas diferentes!';
        feedback.style.display = 'block';
        feedback2.textContent = 'Senhas diferentes!';
        feedback2.style.display = 'block';
        // eslint-disable-next-line no-alert
        alert('Senhas diferentes!');
        return false;
      }
      if (password.value === passwordConfirm.value) {
        const feedback = document.getElementById('feedback-password-confirm');
        feedback.textContent = 'Confirmação de senha obrigatória!';
        feedback.style.display = 'none';
        return true;
      }
      return '';
    },
    save() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      if (
        this.notNull() === true
        && this.lengthValidation() === true
        && this.validationPassword() === true
      ) {
        axios
          .post('http://localhost:5000/api/cadastro', data)
          .then(() => {
            console.log('User successfully registered');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted() {
    this.validation();
  },
};
</script>
