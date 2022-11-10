<template>
  <div class="container py-5 px-0">
    <Titulo titulo="Meus Favoritos" class="px-3" />
    <Filtro class="px-3" />
    <div class="container-fluid px-1">
      <div class="row">
        <div
          class="col-3 d-flex justify-content-center mb-4"
          v-for="favorite in favorites"
          :key="favorite.id"
        >
          <CardAnuncio :announcement="favorite" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/common/Titulo.vue';
import Filtro from '@/components/Filtro.vue';
import CardAnuncio from '@/components/CardAnuncio.vue';
/* import api from '@/api'; */

export default {
  name: 'FavoritosView',
  components: {
    Titulo,
    Filtro,
    CardAnuncio,
  },
  data() {
    return {
      favorites: [
        {
          title: 'Título',
          description: 'Descrição',
          type: 'donation',
        },
        {
          title: 'Título',
          description: 'Descrição',
          type: 'necessity',
        },
        {
          title: 'Título',
          description: 'Descrição',
          type: 'necessity',
        },
        {
          title: 'Título',
          description: 'Descrição',
          type: 'donation',
        },
        {
          title: 'Título',
          description: 'Descrição',
          type: 'necessity',
        },
        {
          title: 'Título',
          description: 'Descrição',
          type: 'donation',
        },
        {
          title: 'Título',
          description: 'Descrição',
          type: 'donation',
        },
        {
          title: 'Título',
          description: 'Descrição',
          type: 'necessity',
        },
      ],
    };
  },
  /* methods: {
    getFavorites() {
      api
        .get('/favorites')
        .then((response) => {
          console.log('Favoritos: ', response.data);
          this.favorites = response.data;
          console.log('Favoritos: ', this.favorites);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getFavorites();
  }, */
};
</script>
