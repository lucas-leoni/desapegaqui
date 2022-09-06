<template>
  <div class="col">
    <div class="row py-1 justify-content-center">
      <div class="col-6 d-flex justify-content-center">
        <Titulo titulo="Login" />
      </div>
    </div>
    <form action="/perfil" class="needs-validation" novalidate>
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
                  id="validationSenha"
                  placeholder="Insira a senha"
                  required
                  v-model="password"
                />
                <div class="invalid-feedback">Senha obrigatória</div>
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
          <button @click="signIn" type="submit" class="btn btn-primary">Fazer Login</button>
        </div>
      </div>
      <div class="row py-1 justify-content-center">
        <div class="col-6 d-flex justify-content-center">
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
      if (this.email !== '' && this.password !== '') {
        return true;
      }
      return false;
    },
    lengthValidation() {
      if (this.email.length >= 6 && this.password.length >= 8 && this.password.length <= 16) {
        return true;
      }
      return false;
    },
    signIn() {
      const data = {
        email: this.email,
        password: this.password,
      };
      if (this.notNull() === true && this.lengthValidation() === true) {
        api
          .post('/login', data)
          .then(() => {})
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
