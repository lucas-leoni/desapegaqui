<template>
  <div class="container-fluid py-4 px-5">
    <div class="container-fluid px-0 px-xl-5">
      <Titulo titulo="Minhas Doações" />
      <Filtro />
      <div class="container-fluid px-0">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
            v-for="donation in donations"
            :key="donation.id"
          >
            <CardMeuAnuncio :announcement="donation" @update="getMyDonations()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Filtro from '@/components/Filtro.vue';
import CardMeuAnuncio from '@/components/CardMeuAnuncio.vue';
import api from '@/api';

export default {
  name: 'MinhasDoacoes',
  components: {
    Titulo,
    Filtro,
    CardMeuAnuncio,
  },
  data() {
    return {
      donations: [],
    };
  },
  methods: {
    getMyDonations() {
      let userStorage = localStorage.getItem('userLogged');
      userStorage = JSON.parse(userStorage);
      const { id } = userStorage;
      api
        .get(`/my-donation-announcements/${id}`)
        .then((response) => {
          this.donations = response.data;
          this.donations = this.donations.reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMyDonations();
  },
};
</script>
