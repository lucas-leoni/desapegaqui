<template>
  <div class="container col-8 bg-light rounded shadow-lg mt-5 py-3">
    <form class="needs-validation" novalidate>
      <div class="row py-4 justify-content-evenly">
        <div class="col-5">
          <div class="row">
            <label for="validationNomeUsuario" class="form-label row">
              <span class="fs-5">Nome de usuário</span>
              <div class="col-11">
                <input
                  type="text"
                  class="form-control mt-1"
                  id="validationNomeUsuario"
                  placeholder="Insira um nome de usuário"
                  required
                  v-model="nome_usuario"
                />
                <div class="invalid-feedback">Nome de usuário obrigatório</div>
              </div>
            </label>
          </div>
        </div>
        <div class="col-5">
          <div class="row">
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
      <div class="row py-4 justify-content-evenly">
        <div class="col-5">
          <div class="row">
            <label for="validationSenha" class="form-label row">
              <span class="fs-5">Senha</span>
              <div class="col-11">
                <input
                  type="password"
                  minlength="8"
                  class="form-control mt-1"
                  id="validationSenha"
                  placeholder="Insira uma senha"
                  required
                  v-model="senha"
                />
                <div class="invalid-feedback">Senha obrigatória</div>
              </div>
              <div class="col-1 d-flex px-0 py-1">
                <i class="bi bi-eye-fill fs-4"></i>
              </div>
            </label>
          </div>
        </div>
        <div class="col-5">
          <div class="row">
            <label for="validationConfirmarSenha" class="form-label row">
              <span class="fs-5">Confimar senha</span>
              <div class="col-11">
                <input
                  type="password"
                  minlength="8"
                  class="form-control mt-1"
                  id="validationConfirmarSenha"
                  placeholder="Confirme a senha"
                  required
                  v-model="confirmar_senha"
                />
                <div class="invalid-feedback">Confirmação de senha obrigatória</div>
              </div>
              <div class="col-1 d-flex px-0 py-1">
                <i class="bi bi-eye-slash-fill fs-4"></i>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="row py-4 justify-content-evenly">
        <div class="col-5">
          <button class="btn btn-secondary" type="button">Fazer Login</button>
        </div>
        <div class="col-5 d-flex justify-content-end">
          <button class="btn btn-primary" type="submit">Criar Conta</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormCriarConta',
  data() {
    return {
      nome_usuario: '',
      email: '',
      senha: '',
      confirmar_senha: '',
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
  },
  mounted() {
    this.validacao();
  },
};
</script>
