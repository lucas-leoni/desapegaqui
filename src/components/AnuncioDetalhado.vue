<template>
  <div class="row justify-content-between">
    <div class="px-0 col-lg-8 pe-lg-5">
      <div class="card">
        <img src="../assets/logo.png" class="card-img-top p-5 p-md-4 p-lg-5" alt="img-anuncio" />
        <div class="card-body">
          <h6 class="card-title">{{ announcement.title }}</h6>
          <p class="card-text">{{ announcement.description }}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 mt-3 mt-lg-0">
      <div class="row justify-content-center justify-content-md-start">
        <div class="col-10 col-sm-7 col-md-6 col-lg-12 flex-column flex-lg-row
        p-lg-4 py-2 py-lg-4 bg-light">
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
                <router-link
                  v-if="donation"
                  @click.native="want"
                  to=""
                  class="btn btn-sm btn-primary">
                  <span>
                    <i class="bi bi-chat-fill"></i>
                    Entrar em contato por chat
                  </span>
                </router-link>
                <router-link
                  v-if="necessity"
                  @click.native="donate"
                  to=""
                  class="btn btn-sm btn-primary">
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
import api from '@/api';

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
    donation() {
      return this.announcement.type === 'donation';
    },
    necessity() {
      return this.announcement.type === 'necessity';
    },
  },
  methods: {
    date() {
      const date = this.announcement.createdAt;
      const dateFormated = date.split(' ');
      const [zero] = dateFormated;
      return zero;
    },
    want() {
      const { id } = this.$route.params;
      const { _id } = this.announcement.user;
      let userStorage = localStorage.getItem('userLogged');
      userStorage = JSON.parse(userStorage);
      const beneficiary = userStorage.id;
      const data = {
        announcement: id,
        donor: _id,
        beneficiary,
      };
      api
        .post('/donation', data)
        .then(() => {
          const data2 = {
            status: 'donated',
          };
          api
            .put(`/announcement/${id}`, data2)
            .then(() => {
              console.log('Successfully received');
              alert('Doação recebida!');
              this.$router.push({ path: '/doacoes-realizadas' });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    donate() {
      const { id } = this.$route.params;
      const { _id } = this.announcement.user;
      let userStorage = localStorage.getItem('userLogged');
      userStorage = JSON.parse(userStorage);
      const donor = userStorage.id;
      const data = {
        announcement: id,
        donor,
        beneficiary: _id,
      };
      api
        .post('/donation', data)
        .then(() => {
          const data2 = {
            status: 'received',
          };
          api
            .put(`/announcement/${id}`, data2)
            .then(() => {
              console.log('Successfully donated');
              alert('Doação realizada!');
              this.$router.push({ path: '/doacoes-realizadas' });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.favorito {
  background-color: #fd7e14;
}
</style>
