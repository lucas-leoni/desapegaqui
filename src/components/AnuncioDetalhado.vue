<template>
  <div class="row justify-content-between">
    <div class="col-8 pe-5">
      <div class="card">
        <img src="../assets/logo.png" class="card-img-top p-5" alt="img-anuncio" />
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
            <h5 class="m-0">Anunciante: {{ announcement.user.username }}</h5>
          </div>
          <div class="row py-2">
            <h6 class="m-0">Publicado em: {{ date() }}</h6>
          </div>
          <div class="row py-2 d-flex justify-content-evenly">
            <div class="col-6">
              <router-link to="" class="btn btn-sm favorito">
                <span class="text-white">
                  <i class="bi bi-heart text-white"></i>
                  Favoritar
                </span>
              </router-link>
            </div>
            <div class="col-3">
              <router-link to="" class="btn btn-sm btn-success">
                <i class="bi bi-telephone-fill"></i>
              </router-link>
            </div>
            <div class="col-3 d-flex justify-content-end">
              <router-link to="" class="btn btn-sm btn-success">
                <i class="bi bi-whatsapp"></i>
              </router-link>
            </div>
          </div>
          <div class="row py-2">
            <div class="col">
              <router-link to="" class="btn btn-sm btn-primary">
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
  /* computed: {
    ddd() {
      return `${this.announcement.user.contact.ddd}`;
    },
    telephone() {
      return `${this.announcement.user.contact.telephone}`;
    },
    telephoneComplete() {
      return `tel:+55${this.ddd}${this.telephone}`;
    },
  }, */
  methods: {
    date() {
      const date = this.announcement.createdAt;
      const dateFormated = date.split(' ');
      const [zero] = dateFormated;
      return zero;
    },
  },
};
</script>

<style scoped>
.favorito {
  background-color: #fd7e14;
}
</style>
