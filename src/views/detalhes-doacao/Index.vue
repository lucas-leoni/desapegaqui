<template>
  <div class="container pb-md-0 pb-lg-5 py-5 px-5">
    <AnuncioDetalhado :announcement="donation" />
  </div>
</template>

<script>
import AnuncioDetalhado from '@/components/AnuncioDetalhado.vue';
import api from '@/api';

export default {
  name: 'DetalhesDoacao',
  components: {
    AnuncioDetalhado,
  },
  data() {
    return {
      donation: {},
    };
  },
  methods: {
    getDonation() {
      const { id } = this.$route.params;
      api
        .get(`/announcement/${id}`)
        .then((response) => {
          this.donation = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getDonation();
  },
};
</script>
