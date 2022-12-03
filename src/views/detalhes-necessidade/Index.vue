<template>
  <div class="container pb-md-0 pb-lg-5 py-5 px-5">
    <AnuncioDetalhado :announcement="necessity" />
  </div>
</template>

<script>
import AnuncioDetalhado from '@/components/AnuncioDetalhado.vue';
import api from '@/api';

export default {
  name: 'DetalhesNecessidade',
  components: {
    AnuncioDetalhado,
  },
  data() {
    return {
      necessity: {},
    };
  },
  methods: {
    getNecessity() {
      const { id } = this.$route.params;
      api
        .get(`/announcement/${id}`)
        .then((response) => {
          this.necessity = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getNecessity();
  },
};
</script>
