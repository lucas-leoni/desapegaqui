<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Minhas Doações" class="px-3" />
    <Filtro class="px-3" />
    <div class="container-fluid px-1">
      <div class="row">
        <div
          class="col-3 d-flex justify-content-center mb-4"
          v-for="donation in donations"
          :key="donation.id"
        >
          <CardMeuAnuncio :announcement="donation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Filtro from '@/components/Filtro.vue';
import CardMeuAnuncio from '@/components/CardMeuAnuncio.vue';

export default {
  name: 'MinhasDoacoes',
  components: {
    Titulo,
    Filtro,
    CardMeuAnuncio,
  },
  data() {
    return {
      donations: [
        {
          title: 'Título',
          description: 'Descrição',
          donated: true,
        },
        {
          title: 'Título',
          description: 'Descrição',
          donated: false,
        },
        {
          title: 'Título',
          description: 'Descrição',
          donated: false,
        },
        {
          title: 'Título',
          description: 'Descrição',
          donated: true,
        },
        {
          title: 'Título',
          description: 'Descrição',
          donated: true,
        },
        {
          title: 'Título',
          description: 'Descrição',
          donated: false,
        },
        {
          title: 'Título',
          description: 'Descrição',
          donated: true,
        },
        {
          title: 'Título',
          description: 'Descrição',
          donated: false,
        },
      ],
    };
  },
  /* methods: {
    getMyDonations() {
      api
        .get('/my-donations')
        .then((response) => {
          console.log('Minhas doações: ', response.data);
          this.donations = response.data;
          console.log('Minhas doações: ', this.donations);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMyDonations();
  }, */
};
</script>
