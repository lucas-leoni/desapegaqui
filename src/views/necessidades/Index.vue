<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Necessidades" class="px-3" />
    <Filtro class="px-3" />
    <div class="container-fluid px-1">
      <div class="row">
        <div
          class="col-3 d-flex justify-content-center mb-4"
          v-for="announcement in announcements"
          :key="announcement.id"
        >
          <CardAnuncio :announcement="announcement" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Filtro from '@/components/Filtro.vue';
import CardAnuncio from '@/components/CardAnuncio.vue';
import api from '@/api';

export default {
  name: 'NecessidadesView',
  components: {
    Titulo,
    Filtro,
    CardAnuncio,
  },
  data() {
    return {
      announcements: [],
    };
  },
  methods: {
    getAnnouncements() {
      api
        .get('/necessity-announcements')
        .then((response) => {
          console.log('Anúncios: ', response.data);
          this.announcements = response.data;
          console.log('Anúncios: ', this.announcements);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAnnouncements();
  },
};
</script>
