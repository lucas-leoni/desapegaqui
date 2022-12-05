<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white px-5 px-lg-0 px-xl-5 py-1
    shadow-lg justify-content-evenly justify-content-xl-center">
    <div class="col-6 col-lg-2 logo d-flex justify-content-lg-center">
      <router-link class="link-logo" to="/">
        <img src="../../assets/logo.png" alt="logo" width="100px" />
      </router-link>
    </div>
    <div class="col-6 col-lg-10 d-flex d-lg-block justify-content-end flex-column">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul id="ul-principal" class="navbar-nav">
          <li class="nav-item px-2 d-flex align-items-center">
            <router-link to="/doar" class="nav-link">Doar</router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center">
            <router-link to="/cadastrar-necessidade" class="nav-link">
              Cadastrar necessidade
            </router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center">
            <router-link to="/doacoes" class="nav-link">Doações</router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center">
            <router-link to="/necessidades" class="nav-link">Necessidades</router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center">
            <router-link to="/doacoes-realizadas" class="nav-link">Doações realizadas</router-link>
          </li>
          <li v-if="show" class="nav-item px-2 d-flex align-items-center">
            <router-link to="/criar-conta" class="nav-link criar-conta">
              <button type="button" class="btn btn-sm btn-outline-primary">Criar Conta</button>
            </router-link>
          </li>
          <li v-if="show" class="nav-item px-2 d-flex align-items-center">
            <router-link to="/login" class="nav-link login">
              <button id="login" type="button" class="btn btn-sm btn-primary">Login</button>
            </router-link>
          </li>
          <li v-else class="nav-item dropdown">
            <router-link
              to=""
              :id="border()"
              class="nav-link dropdown-toggle hello"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Olá, {{username()}}
            </router-link>
            <ul class="dropdown-menu dropdown-menu-dark border border-0 p-0 mt-lg-1">
              <li>
                <router-link :to="`/perfil/${id()}`" class="nav-link sair text-white">
                  Perfil
                </router-link>
              </li>
              <li>
                <router-link @click.native="logout()" to="/" class="nav-link sair text-white">
                  Sair
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarApp',
  props: {
    notLogged: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      show: this.notLogged,
    };
  },
  methods: {
    border() {
      if (this.$route.name === 'perfil') {
        return 'border';
      } return '';
    },
    username() {
      let value = window.localStorage.getItem('userLogged');
      value = JSON.parse(value);
      value = value.username;
      return value;
    },
    id() {
      let value = window.localStorage.getItem('userLogged');
      value = JSON.parse(value);
      value = value.id;
      return value;
    },
    logout() {
      localStorage.removeItem('userLogged');
      this.show = this.$emit('logout');
    },
  },
};
</script>

<style scoped>
.nav-link {
  font-size: 0.875rem;
}

.nav-link:hover:not(.criar-conta, .login, .sair) {
  border-bottom: 3px solid #E64242;
}

.router-link-active:not(.link-logo, .sair, .hello) {
  border-bottom: 3px solid #E64242 !important;
}

#border {
  border-bottom: 3px solid #E64242 !important;
}

.dropdown-menu {
  min-width: 6rem;
}

@media (min-width: 992px) and (max-width: 998px) {
.nav-item {
  padding: 0rem !important;
}
}

@media (max-width: 991px) {
.navbar-toggler {
  display: flex;
  align-self: end;
  border: none;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-nav {
  position: absolute;
  background: rgba(40, 40, 40, 0.9);
  top: 100%;
  right: 4rem;
  margin: 0px;
  height: auto;
  z-index: 1000;
}
.navbar-light .navbar-nav .nav-link {
  color: white;
}
.nav-link:hover:not(.login) {
  color: white !important;
}
.btn-outline-primary {
  color: white;
  border-color: white;
}
.nav-item {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
.router-link-active:not(.link-logo) {
  color: white !important;
}
.dropdown-menu {
  background: #3B3B3B !important;
  border: none;
}
}
</style>
