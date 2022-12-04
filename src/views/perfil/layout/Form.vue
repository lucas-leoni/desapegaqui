<template>
  <div class="container bg-light rounded shadow-lg p-3 mt-sm-3 px-sm-0 py-sm-2">
    <form @submit.prevent="update()">
      <div class="flex-column flex-sm-row row py-sm-2 mx-sm-1 mx-lg-0 justify-content-evenly">
        <div class="col-12 col-sm-5 px-sm-1">
          <div class="row justify-content-center">
            <label for="username" class="form-label">
              <span class="fs-6">Nome de Usuário</span>
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
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-5 px-sm-1">
          <div class="row justify-content-center">
            <label for="email" class="form-label">
              <span class="fs-6">Email</span>
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
            </label>
          </div>
        </div>
      </div>
      <div class="flex-column flex-sm-row row py-sm-2 mx-sm-1 mx-lg-0 justify-content-evenly">
        <div class="col-12 col-sm-5 px-sm-1">
          <div class="row justify-content-center">
            <label for="password" class="form-label row">
              <span class="fs-6 p-0">Senha</span>
              <div class="col-10 col-lg-11 p-0">
                <input
                  :type="inputType"
                  minlength="8"
                  maxlength="16"
                  class="form-control form-control-sm mt-1"
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
              <div class="col-2 col-lg-1 d-flex justify-content-center align-items-start px-0 py-1">
                <button @click="togglePassword" type="button" class="btn btn-default p-0">
                  <i v-if="isPassword" class="bi bi-eye-fill fs-4"></i>
                  <i v-else class="bi bi-eye-slash-fill fs-4"></i>
                </button>
              </div>
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-5 px-sm-1">
          <div class="row justify-content-center">
            <label for="password-confirm" class="form-label row">
              <span class="fs-6 p-0">Confirmar Senha</span>
              <div class="col-10 col-lg-11 p-0">
                <input
                  :type="inputType"
                  minlength="8"
                  maxlength="16"
                  class="form-control form-control-sm mt-1"
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
              <div class="col-2 col-lg-1 d-flex justify-content-center align-items-start px-0 py-1">
                <button @click="togglePassword" type="button" class="btn btn-default p-0">
                  <i v-if="isPassword" class="bi bi-eye-fill fs-4"></i>
                  <i v-else class="bi bi-eye-slash-fill fs-4"></i>
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="flex-column flex-sm-row row py-sm-2 mx-sm-1 mx-lg-0 justify-content-evenly">
        <div class="col-12 col-sm-3 p-sm-0">
          <div class="row justify-content-center">
            <label for="cep" class="form-label">
              <span class="fs-6">CEP</span>
              <input
                @blur="getAddress()"
                type="number"
                class="form-control form-control-sm mt-1"
                id="cep"
                placeholder="Insira seu CEP"
                required
                v-model="$v.cep.$model"
                :class="{ error: $v.cep.$error, success: !$v.cep.$error }"
              />
              <div v-if="$v.cep.$error" class="text-danger">
                <small>Deve conter 8 caracteres</small>
              </div>
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-3 p-sm-0">
          <div class="row justify-content-center">
            <label for="city" class="form-label">
              <span class="fs-6">Cidade</span>
              <input
                disabled
                type="text"
                class="form-control form-control-sm mt-1"
                id="city"
                placeholder="Insira uma cidade"
                required
                minlength="3"
                v-model="$v.city.$model"
                :class="{ error: $v.city.$error, success: !$v.city.$error }"
              />
              <div v-if="$v.city.$error" class="text-danger">
                <small>Deve conter ao menos 3 caracteres</small>
              </div>
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-2 col-md-3 p-sm-0">
          <div class="row justify-content-center">
            <label for="state" class="form-label">
              <span class="fs-6">Estado</span>
              <input
                disabled
                type="text"
                class="form-control form-control-sm mt-1"
                id="state"
                placeholder="Insira um estado"
                required
                minlength="2"
                maxlength="2"
                v-model="$v.state.$model"
                :class="{ error: $v.state.$error, success: !$v.state.$error }"
              />
              <div v-if="$v.state.$error" class="text-danger">
                <small>Deve conter 2 caracteres</small>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="flex-column flex-sm-row row py-sm-2 mx-sm-1 mx-lg-0 justify-content-evenly">
        <div class="col-12 col-sm-4 p-sm-0">
          <div class="row justify-content-center">
            <label for="street" class="form-label">
              <span class="fs-6">Rua</span>
              <input
                disabled
                type="text"
                class="form-control form-control-sm mt-1"
                id="street"
                placeholder="Insira uma rua"
                required
                minlength="3"
                v-model="$v.street.$model"
                :class="{ error: $v.street.$error, success: !$v.street.$error }"
              />
              <div v-if="$v.street.$error" class="text-danger">
                <small>Deve conter ao menos 3 caracteres</small>
              </div>
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-2 p-sm-0">
          <div class="row justify-content-center">
            <label for="number" class="form-label">
              <span class="fs-6">Número</span>
              <input
                type="number"
                class="form-control form-control-sm mt-1"
                id="number"
                placeholder="Insira um número"
                required
                minlength="1"
                v-model="$v.number.$model"
                :class="{ error: $v.number.$error, success: !$v.number.$error }"
              />
              <div v-if="$v.number.$error" class="text-danger">
                <small>Deve conter ao menos 1 caractere</small>
              </div>
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-3 p-sm-0">
          <div class="row justify-content-center">
            <label for="neighborhood" class="form-label">
              <span class="fs-6">Bairro</span>
              <input
                disabled
                type="text"
                class="form-control form-control-sm mt-1"
                id="neighborhood"
                placeholder="Insira um bairro"
                required
                minlength="3"
                v-model="$v.neighborhood.$model"
                :class="{ error: $v.neighborhood.$error, success: !$v.neighborhood.$error }"
              />
              <div v-if="$v.neighborhood.$error" class="text-danger">
                <small>Deve conter ao menos 3 caracteres</small>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="flex-column flex-sm-row row py-sm-2 mx-sm-1 mx-lg-0 justify-content-evenly">
        <div class="col-12 col-sm-4 p-sm-0">
          <div class="row justify-content-center">
            <label for="complement" class="form-label">
              <span class="fs-6">Complemento</span>
              <input
                type="text"
                class="form-control form-control-sm mt-1"
                id="complement"
                placeholder="Insira um complemento"
                v-model="complement"
              />
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-2 p-sm-0">
          <div class="row justify-content-center">
            <label for="ddd" class="form-label">
              <span class="fs-6">DDD</span>
              <input
                type="number"
                class="form-control form-control-sm mt-1"
                id="ddd"
                placeholder="Insira um DDD"
                required
                minlength="2"
                maxlength="2"
                v-model="$v.ddd.$model"
                :class="{ error: $v.ddd.$error, success: !$v.ddd.$error }"
              />
              <div v-if="$v.ddd.$error" class="text-danger">
                <small>Deve conter 2 caracteres</small>
              </div>
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-3 p-sm-0">
          <div class="row justify-content-center">
            <label for="telephone" class="form-label">
              <span class="fs-6 d-block d-sm-none d-md-block">Telefone ou Celular</span>
              <span class="fs-6 d-none d-sm-block d-md-none">Telefone</span>
              <input
                type="number"
                class="form-control form-control-sm mt-1"
                id="telephone"
                placeholder="Insira um telefone ou celular"
                required
                minlength="8"
                maxlength="9"
                v-model="$v.telephone.$model"
                :class="{ error: $v.telephone.$error, success: !$v.telephone.$error }"
              />
              <div v-if="$v.telephone.$error" class="text-danger">
                <small>Deve conter ao menos 8 caracteres</small>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="row py-sm-2 mx-sm-1 mx-lg-0 justify-content-evenly">
        <div class="col-6 col-sm-5 px-sm-1">
          <button @click="limpar" type="button" class="btn btn-sm btn-secondary">Limpar</button>
        </div>
        <div class="col-6 col-sm-5 d-flex justify-content-end px-sm-1">
          <button :disabled="$v.$invalid" type="submit" class="btn btn-sm btn-primary">
            Atualizar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import api from '@/api';
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: 'FormPerfil',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirm: '',
      cep: '',
      city: '',
      state: '',
      street: '',
      number: '',
      neighborhood: '',
      complement: '',
      ddd: '',
      telephone: '',
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
    cep: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(8),
    },
    city: {
      required,
      minLength: minLength(3),
    },
    state: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(2),
    },
    street: {
      required,
      minLength: minLength(3),
    },
    number: {
      required,
      minLength: minLength(1),
    },
    neighborhood: {
      required,
      minLength: minLength(3),
    },
    ddd: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(2),
    },
    telephone: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(9),
    },
  },
  computed: {
    isPassword() {
      return this.inputType === 'password';
    },
  },
  methods: {
    update() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        address: {
          cep: this.cep,
          city: this.city,
          state: this.state,
          street: this.street,
          number: this.number,
          neighborhood: this.neighborhood,
          complement: this.complement,
        },
        contact: {
          ddd: this.ddd,
          telephone: this.telephone,
        },
      };
      const { id } = this.$route.params;
      api
        .put(`/user/${id}`, data)
        .then(() => {
          this.getData();
          console.log('User successfully updated');
          alert('Dados atualizados!');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getData() {
      const { id } = this.$route.params;
      api
        .get(`/user/${id}`)
        .then((response) => {
          this.username = response.data.username;
          this.email = response.data.email;
          this.password = response.data.password;
          this.password_confirm = response.data.password;
          this.cep = response.data.address.cep;
          this.city = response.data.address.city;
          this.state = response.data.address.state;
          this.street = response.data.address.street;
          this.number = response.data.address.number;
          this.neighborhood = response.data.address.neighborhood;
          this.complement = response.data.address.complement;
          this.ddd = response.data.contact.ddd;
          this.telephone = response.data.contact.telephone;
          console.log('User successfully getted');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAddress() {
      const { cep } = this;
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          this.city = response.data.localidade;
          this.state = response.data.uf;
          this.street = response.data.logradouro;
          this.neighborhood = response.data.bairro;
          console.log('Endereço obtido');
          console.log('Cidade: ', this.city);
          console.log('Estado: ', this.state);
          console.log('Rua: ', this.street);
          console.log('Bairro: ', this.neighborhood);
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
    limpar() {
      this.username = '';
      this.email = '';
      this.password = '';
      this.password_confirm = '';
      this.cep = '';
      this.city = '';
      this.state = '';
      this.street = '';
      this.number = '';
      this.neighborhood = '';
      this.complement = '';
      this.ddd = '';
      this.telephone = '';
      this.$v.ddd.$error = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
</style>
