<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white px-5 py-1
    shadow-lg justify-content-center">
    <div class="col-2 logo d-flex justify-content-center">
      <router-link class="link-logo" to="/">
        <img src="../../assets/logo.svg" alt="logo" width="100px" />
      </router-link>
    </div>
    <div class="col-10">
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
          <!-- <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/" class="nav-link">O que é?</router-link>
          </li>
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/" class="nav-link">Como funciona? </router-link>
          </li> -->
          <li class="nav-item px-2 d-flex align-items-center fs-6">
            <router-link to="/doar" class="nav-link">Doar</router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center fs-6">
            <router-link to="/cadastrar-necessidade" class="nav-link">
              Cadastrar necessidade
            </router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center fs-6">
            <router-link to="/doacoes" class="nav-link">Consultar doações</router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center fs-6">
            <router-link to="/necessidades" class="nav-link">Consultar necessidades</router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center fs-6">
            <router-link to="/criar-conta" class="nav-link criar-conta">
              <button type="button" class="btn btn-sm btn-outline-primary">Criar Conta</button>
            </router-link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center fs-6">
            <router-link to="/login" class="nav-link login">
              <button id="login" type="button" class="btn btn-sm btn-primary">Login</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarApp',
};
</script>

<style scoped>
.nav-link:hover:not(.criar-conta, .login) {
  border-bottom: 3px solid #E64242;
}

.router-link-active:not(.link-logo) {
  border-bottom: 3px solid #E64242 !important;
}

@media (max-width: 1131px) {
nav {
  padding-left: 0rem !important;
  padding-right: 0rem !important;
  justify-content: space-evenly !important;
}
.col-2 {
  flex: 0 0 auto;
  width: 8.33333333%;
}
}

@media (min-width: 992px) and (max-width: 998px) {
.nav-item {
  padding: 0rem !important;
}
}

@media (max-width: 991px) {
.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}
.col-10 {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
nav {
  padding-left: 3rem !important;
  padding-right: 3rem !important;
}
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
  background: #282828;
  background: rgba(40, 40, 40, 0.9);
  top: 100%;
  right: 4rem;
  margin: 0px;
  height: auto;
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
}
</style>
