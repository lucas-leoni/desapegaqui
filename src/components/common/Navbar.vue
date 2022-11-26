<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white px-5 py-4
    shadow-lg justify-content-center">
    <div class="col-1 logo d-flex justify-content-start">
      <router-link to="/">
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
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/" class="nav-link">O que é?</router-link>
          </li>
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/" class="nav-link">Como funciona? </router-link>
          </li>
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/doar" class="nav-link">Doar</router-link>
          </li>
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/cadastrar-necessidade" class="nav-link">
              Cadastrar necessidade
            </router-link>
          </li>
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/doacoes" class="nav-link">Consultar doações</router-link>
          </li>
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/necessidades" class="nav-link">Consultar necessidades</router-link>
          </li>
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/criar-conta" class="nav-link criar-conta">
              <button type="button" class="btn btn-outline-primary">Criar Conta</button>
            </router-link>
          </li>
          <li class="nav-item px-3 d-flex align-items-center fs-5">
            <router-link to="/login" class="nav-link login">
              <button id="login" type="button" class="btn btn-primary">Login</button>
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
