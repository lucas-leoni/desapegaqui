<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo.png" class="card-img-top p-5" alt="img-anuncio" />
    <div class="card-body">
      <h5 class="card-title">{{ donation.announcement.title }}</h5>
      <p class="card-text">{{ donation.announcement.description }}</p>
      <div class="col d-flex justify-content-between">
        <router-link
          :to="`/doacao-realizada/${donation._id}`"
          class="btn btn-sm btn-primary"
        >
          <i class="bi bi-plus-circle me-1"></i> Detalhes
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDoacoesRealizadas',
  props: {
    donation: {
      type: Object,
      required: true,
    },
  },
};
</script>
