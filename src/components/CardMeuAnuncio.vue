<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo-nova.png" class="card-img-top" alt="img-anuncio" />
    <div class="card-body">
      <h5 class="card-title d-flex justify-content-between">
        {{ announcement.title }}
        <span v-if="announcement.donated" class="badge rounded-pill bg-success">Doado</span>
        <span v-if="announcement.received" class="badge rounded-pill bg-success">Recebido</span>
      </h5>
      <p class="card-text">{{ announcement.description }}</p>
      <div class="col">
        <div class="row">
          <div class="col">
            <router-link to="" class="btn btn-primary">
              <i class="bi bi-plus-circle me-1"></i> Detalhes
            </router-link>
          </div>
          <div class="col d-flex justify-content-end">
            <router-link to="" class="btn btn-warning me-2">
              <i class="bi bi-pencil-fill"></i>
            </router-link>
            <router-link to="" class="btn btn-danger">
              <i class="bi bi-trash3-fill"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMeuAnuncio',
  props: {
    announcement: {
      type: Object,
      required: true,
    },
  },
};
</script>
