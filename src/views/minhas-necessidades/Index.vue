<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Minhas Necessidades" class="px-3" />
    <Filtro class="px-3" />
    <div class="container-fluid px-1">
      <div class="row">
        <div
          class="col-3 d-flex justify-content-center mb-4"
          v-for="necessity in necessities"
          :key="necessity.id"
        >
          <CardMeuAnuncio :announcement="necessity" />
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
  name: 'MinhasNecessidades',
  components: {
    Titulo,
    Filtro,
    CardMeuAnuncio,
  },
  data() {
    return {
      necessities: [
        {
          title: 'Título',
          description: 'Descrição',
          received: true,
        },
        {
          title: 'Título',
          description: 'Descrição',
          received: false,
        },
        {
          title: 'Título',
          description: 'Descrição',
          received: false,
        },
        {
          title: 'Título',
          description: 'Descrição',
          received: true,
        },
        {
          title: 'Título',
          description: 'Descrição',
          received: true,
        },
        {
          title: 'Título',
          description: 'Descrição',
          received: false,
        },
        {
          title: 'Título',
          description: 'Descrição',
          received: true,
        },
        {
          title: 'Título',
          description: 'Descrição',
          received: false,
        },
      ],
    };
  },
  /* methods: {
    getMyNecessities() {
      api
        .get('/my-necessities')
        .then((response) => {
          console.log('Minhas necessidades: ', response.data);
          this.necessities = response.data;
          console.log('Minhas necessidades: ', this.necessities);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMyNecessities();
  }, */
};
</script>
