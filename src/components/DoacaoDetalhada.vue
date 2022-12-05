<template>
  <div class="row justify-content-between">
    <div class="px-0 col-lg-8 pe-lg-5">
      <div class="card">
        <img src="../assets/logo.png" class="card-img-top p-5 p-md-4 p-lg-5" alt="img-anuncio" />
        <div class="card-body">
          <h6 class="card-title">{{ donation.announcement.title }}</h6>
          <p class="card-text">{{ donation.announcement.description }}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 mt-3 mt-lg-0">
      <div class="row justify-content-center justify-content-md-start">
        <div class="col-10 col-sm-7 col-md-6 col-lg-12 flex-column flex-lg-row
        p-lg-4 py-2 py-lg-4 bg-light">
          <div class="col">
            <div class="row py-2">
              <h5 class="m-0 text-center">Doador: {{ donation.donor.username }}</h5>
            </div>
            <div class="row py-2">
              <h6 class="m-0 text-center">Publicado em: {{ date() }}</h6>
            </div>
            <div class="row py-2">
              <h6 class="m-0 text-center">Doado em: {{ dateDonation() }}</h6>
            </div>
            <div class="row py-2">
              <h5 class="m-0 text-center">Beneficiário: {{ donation.beneficiary.username }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DoacaoDetalhada',
  props: {
    donation: {
      type: Object,
      required: true,
    },
  },
  methods: {
    date() {
      const date = this.donation.announcement.createdAt;
      const dateFormated = date.split(' ');
      const [zero] = dateFormated;
      return zero;
    },
    dateDonation() {
      const date = this.donation.createdAt;
      const dateFormated = date.split(' ');
      const [zero] = dateFormated;
      return zero;
    },
  },
};
</script>
