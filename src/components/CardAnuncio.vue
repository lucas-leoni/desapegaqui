<template>
  <div class="col-3 d-flex justify-content-center mb-4">
    <div class="card" style="width: 18rem">
      <img src="../assets/logo-nova.png" class="card-img-top" alt="img-anuncio" />
      <div class="card-body">
        <h5 class="card-title">Título</h5>
        <p class="card-text">Descrição</p>
        <div class="col d-flex justify-content-between">
          <router-link to="" class="btn btn-primary"> Mais detalhes </router-link>
          <router-link to="" class="btn favorito">
            <i class="bi bi-heart text-white"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAnuncio',
};
</script>

<style scoped>
.favorito {
  background-color: #fd7e14;
}
</style>
