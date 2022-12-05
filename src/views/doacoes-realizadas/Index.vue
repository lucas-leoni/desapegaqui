<template>
  <div class="container-fluid py-4 px-5">
    <div class="container-fluid px-0 px-xl-5">
      <Titulo titulo="Doações Realizadas" />
      <Filtro />
      <div class="container-fluid px-0">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
            v-for="donation in donations"
            :key="donation.id"
          >
            <CardDoacoesRealizadas :donation="donation" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Filtro from '@/components/Filtro.vue';
import CardDoacoesRealizadas from '@/components/CardDoacoesRealizadas.vue';
import api from '@/api';

export default {
  name: 'DoacoesRealizadasView',
  components: {
    Titulo,
    Filtro,
    CardDoacoesRealizadas,
  },
  data() {
    return {
      donations: [],
    };
  },
  methods: {
    getDonations() {
      api
        .get('/donations')
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
    this.getDonations();
  },
};
</script>
