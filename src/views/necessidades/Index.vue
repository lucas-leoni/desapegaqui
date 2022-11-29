<template>
  <div class="container-fluid py-4 px-5">
    <div class="container-fluid px-0 px-xl-5">
      <Titulo titulo="Necessidades" />
      <Filtro />
      <div class="container-fluid px-0">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
            v-for="announcement in announcements"
            :key="announcement.id"
          >
            <CardAnuncio :announcement="announcement" />
          </div>
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
          this.announcements = response.data;
          this.announcements = this.announcements.reverse();
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
