<template>
  <div class="row justify-content-between">
    <div class="col-8 px-5">
      <div class="card">
        <img src="../assets/logo-nova.png" class="card-img-top" alt="img-anuncio" />
        <div class="card-body">
          <h5 class="card-title">{{ announcement.title }}</h5>
          <p class="card-text">{{ announcement.description }}</p>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="row p-5 bg-light">
        <div class="col">
          <div class="row py-2">
            <div class="col d-flex justify-content-center">
              <h5 class="m-0">Anunciante: {{ announcement.user.username }}</h5>
            </div>
          </div>
          <div class="row py-2">
            <div class="col d-flex justify-content-center">
              <h6 class="m-0">Data de publicação: {{ announcement.createdAt }}</h6>
            </div>
          </div>
          <div class="row py-2">
            <div class="col d-flex justify-content-center">
              <router-link to="" class="btn favorito mx-3">
                <span class="text-white">
                  <i class="bi bi-heart text-white"></i>
                  Favoritar
                </span>
              </router-link>
              <router-link to="" class="btn btn-success mx-3">
                <i class="bi bi-telephone-fill"></i>
              </router-link>
              <router-link to="" class="btn btn-success mx-3">
                <i class="bi bi-whatsapp"></i>
              </router-link>
            </div>
          </div>
          <div class="row py-2">
            <div class="col d-flex justify-content-center">
              <router-link to="" class="btn btn-primary">
                <span>
                  <i class="bi bi-chat-fill"></i>
                  Entrar em contato por chat
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AnuncioDetalhado',
  props: {
    announcement: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  height: 40vh;
}
.favorito {
  background-color: #fd7e14;
}
</style>
