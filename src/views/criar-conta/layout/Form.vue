<template>
  <div class="col">
    <div class="row py-1 justify-content-center">
      <div class="col-6 d-flex justify-content-center">
        <Titulo titulo="Criar conta" />
      </div>
    </div>
    <form class="needs-validation" novalidate>
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
                  type="password"
                  minlength="8"
                  class="senha form-control mt-1"
                  id="validationSenha"
                  placeholder="Insira uma senha"
                  required
                  v-model="password"
                />
                <div class="invalid-feedback">Senha obrigatória</div>
              </div>
              <div class="col-1 d-flex px-0 py-1">
                <i v-if="true" class="bi bi-eye-fill fs-4"></i>
                <i v-else class="bi bi-eye-slash-fill fs-4"></i>
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
                  type="password"
                  minlength="8"
                  maxlength="16"
                  class="confirmar-senha form-control mt-1"
                  id="validationConfirmarSenha"
                  placeholder="Confirme a senha"
                  required
                  v-model="password_confirm"
                />
                <div class="invalid-feedback">Confirmação de senha obrigatória</div>
              </div>
              <div class="col-1 d-flex px-0 py-1">
                <i v-if="true" class="bi bi-eye-fill fs-4"></i>
                <i v-else class="bi bi-eye-slash-fill fs-4"></i>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="row py-1 justify-content-center">
        <div class="col-6 d-flex justify-content-center">
          <button type="submit" class="btn btn-primary">Criar Conta</button>
        </div>
      </div>
      <div class="row py-1 justify-content-center">
        <div class="col-6 d-flex justify-content-center">
          <p>
            Já possui uma conta?
            <router-link class="text-decoration-none" to="/login">
              Fazer login
            </router-link>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';

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
    };
  },
  methods: {
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
    /* mostrarSenha() {
      const inputSenha = document.querySelectorAll('.senha')[0];
      inputSenha.type = 'text';
    }, */
  },
  mounted() {
    this.validacao();
  },
};
</script>
