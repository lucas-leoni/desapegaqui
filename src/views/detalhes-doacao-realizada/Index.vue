<template>
  <div class="container pb-md-0 pb-lg-5 py-5 px-5">
    <DoacaoDetalhada :donation="donation" />
  </div>
</template>

<script>
import DoacaoDetalhada from '@/components/DoacaoDetalhada.vue';
import api from '@/api';

export default {
  name: 'DetalhesDoacaoRealizada',
  components: {
    DoacaoDetalhada,
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
        .get(`/donation/${id}`)
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
