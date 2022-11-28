<template>
  <div>
    <div class="container-fluid p-5">
      <div class="row px-lg-5">
        <div class="col pb-4">
          <h1>Marketplace de Doações</h1>
        </div>
      </div>
      <div class="row px-lg-5 justify-content-around">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center pe-lg-5">
          <p class="fs-3">
            Desapegaqui é uma plataforma que realiza a intermediação da comunicação entre pessoas
            que possuem itens para doar com pessoas ou entidades que buscam contribuições.
          </p>
        </div>
        <div class="col-12 col-md-6 ps-lg-5 pt-5 pt-md-0">
          <img src="../../assets/image-1.svg" alt="image-1" width="100%" height="100%" />
        </div>
      </div>
    </div>
    <div class="container-fluid px-5 py-md-5">
      <div class="row px-lg-5 justify-content-around flex-column-reverse flex-md-row">
        <div class="col-12 col-md-6 pe-lg-5 py-5 py-md-0">
          <img src="../../assets/image-2.svg" alt="image-2" width="100%" height="100%" />
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center ps-lg-5">
          <div class="col pb-4">
            <h1>Vitrine Virtual de Doações</h1>
          </div>
          <p class="fs-3">
            Doadores encontram pessoas ou entidades para realizar suas doações de forma simples e
            rápida.
          </p>
          <p class="fs-3">
            Pessoas ou entidades encontram itens que estão sendo doados, que atendam as suas
            necessidades de forma simples e rápida.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
@media (max-width: 991px) {
  /* .row {
    padding-left: 0rem !important;
    padding-right: 0rem !important;
  } */
}
</style>
