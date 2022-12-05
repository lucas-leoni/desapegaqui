<template>
  <ul class="nav flex-column position-absolute">
    <li class="nav-item li-icons d-flex justify-content-center">
      <button
        class="navbar-toggler p-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar"
        aria-controls="sidebar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list text-danger fs-5"></i>
      </button>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link :to="`/perfil/${id()}`" title="Meu perfil">
        <i class="bi bi-person-fill text-danger fs-5"></i>
      </router-link>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link to="/minhas-doacoes" title="Minhas doações">
        <i class="bi bi-gift-fill text-danger fs-5"></i>
      </router-link>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link to="/minhas-necessidades" title="Minhas necessidades">
        <i class="bi bi-box2-heart-fill text-danger fs-5"></i>
      </router-link>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link to="" title="Meus favoritos">
        <i class="bi bi-heart-fill text-danger fs-5"></i>
      </router-link>
    </li>
    <li class="nav-item li-icons d-flex justify-content-center">
      <router-link to="" title="Minhas conversas">
        <i class="bi bi-chat-dots-fill text-danger fs-5"></i>
      </router-link>
    </li>
    <ul id="sidebar" class="collapse p-0 position-absolute start-100">
      <li class="nav-item li-close d-flex justify-content-end">
        <button
          type="button"
          class="btn-close bg-danger"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
          aria-expanded="false"
          aria-label="Toggle navigation">
        </button>
      </li>
      <li class="nav-item li-text d-flex">
        <router-link :to="`/perfil/${id()}`" class="text-decoration-none text-danger">
          Meu perfil
        </router-link>
      </li>
      <li class="nav-item li-text d-flex">
        <router-link to="/minhas-doacoes" class="text-decoration-none text-danger">
          Minhas doações
        </router-link>
      </li>
      <li class="nav-item li-text d-flex">
        <router-link to="/minhas-necessidades" class="text-decoration-none text-danger">
          Minhas necessidades
        </router-link>
      </li>
      <li class="nav-item li-text d-flex">
        <router-link to="" class="text-decoration-none text-danger">
          Meus favoritos
        </router-link>
      </li>
      <li class="nav-item li-text d-flex">
        <router-link to="" class="text-decoration-none text-danger">
          Minhas conversas
        </router-link>
      </li>
    </ul>
  </ul>
</template>

<script>
export default {
  name: 'SidebarPages',
  methods: {
    id() {
      let value = window.localStorage.getItem('userLogged');
      value = JSON.parse(value);
      value = value.id;
      return value;
    },
  },
};
</script>

<style scoped>
ul {
  background: rgba(40, 40, 40, 0.9);
}
ul {
  z-index: 1000;
}
.li-icons {
  padding: 1rem 0.75rem;
}
.li-text {
  padding: 1.19rem 0.75rem;
}
.li-close {
  padding: 0.95rem 0.75rem;
}
.navbar-toggler:focus {
  box-shadow: none;
}
#sidebar {
  width: 11rem;
}
</style>
