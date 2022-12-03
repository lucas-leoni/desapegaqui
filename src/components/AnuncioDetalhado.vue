<template>
  <div class="row justify-content-between">
    <div class="col-lg-8 pe-lg-5 px-md-0">
      <div class="card">
        <img src="../assets/logo.png" class="card-img-top p-md-4 p-lg-5" alt="img-anuncio" />
        <div class="card-body">
          <h6 class="card-title">{{ announcement.title }}</h6>
          <p class="card-text">{{ announcement.description }}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 mt-3 mt-lg-0">
      <div class="row">
        <div class="col-md-6 col-lg-12 flex-md-column flex-lg-row p-lg-4 p-xl-5 py-md-2 py-lg-4 py-xl-5 py-lg-0 bg-light">
          <div class="col">
            <div class="row py-2">
              <h5 class="m-0 text-center">Anunciante: {{ announcement.user.username }}</h5>
            </div>
            <div class="row py-2">
              <h6 class="m-0 text-center">Publicado em: {{ date() }}</h6>
            </div>
            <div class="col py-2 d-flex justify-content-evenly">
              <router-link to="" class="btn btn-sm favorito">
                <span class="text-white">
                  <i class="bi bi-heart text-white"></i>
                  Favoritar
                </span>
              </router-link>
              <a :href="`tel:+${telephoneComplete}`" class="btn btn-sm btn-success">
                <i class="bi bi-telephone-fill"><span class="d-none">tel</span></i>
              </a>
              <a :href="whatsapp" target="_blank" class="btn btn-sm btn-success">
                <i class="bi bi-whatsapp"><span class="d-none">whatsapp</span></i>
              </a>
            </div>
            <div class="row py-2">
              <div class="col d-flex justify-content-center">
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
  computed: {
    ddd() {
      return `${this.announcement.user.contact.ddd}`;
    },
    telephone() {
      return `${this.announcement.user.contact.telephone}`;
    },
    telephoneComplete() {
      return `55${this.ddd}${this.telephone}`;
    },
    whatsapp() {
      return `https://api.whatsapp.com/send?phone=${this.telephoneComplete}`;
    },
  },
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
