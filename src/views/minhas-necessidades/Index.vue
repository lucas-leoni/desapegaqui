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
          <CardMeuAnuncio :announcement="necessity" @update="getMyNecessities()"/>
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
  name: 'MinhasNecessidades',
  components: {
    Titulo,
    Filtro,
    CardMeuAnuncio,
  },
  data() {
    return {
      necessities: [],
    };
  },
  methods: {
    getMyNecessities() {
      let userStorage = localStorage.getItem('userLogged');
      userStorage = JSON.parse(userStorage);
      const { id } = userStorage;
      api
        .get(`/my-necessity-announcements/${id}`)
        .then((response) => {
          this.necessities = response.data;
          this.necessities = this.necessities.reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getMyNecessities();
  },
};
</script>
