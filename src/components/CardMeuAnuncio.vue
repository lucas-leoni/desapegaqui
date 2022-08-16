<template>
  <div class="col-3 d-flex justify-content-center mb-4">
    <div class="card" style="width: 18rem">
      <img src="../assets/logo-nova.png" class="card-img-top" alt="img-anuncio" />
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Descrição</p>
        <div class="col d-flex justify-content-between">
          <router-link to="" class="btn btn-warning">
            <i class="bi bi-pencil-fill"></i>
          </router-link>
          <router-link to="" class="btn btn-danger">
            <i class="bi bi-trash3-fill"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMeuAnuncio',
};
</script>
