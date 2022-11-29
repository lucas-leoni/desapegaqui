<template>
  <div class="container-fluid px-0 py-4">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-5 d-flex align-items-center pe-0 pb-4 pb-md-0">
        <div class="col">
          <form class="d-flex" role="search">
            <input
              class="form-control form-control-sm me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-sm btn-success" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div
        class="col-12 col-md-8 col-lg-7 d-flex align-items-center
        justify-content-evenly pe-0 ps-1 ps-sm-3 ps-md-0">
        <div class="col-2 d-flex justify-content-start justify-content-md-center">
          <h6 class="mb-0">Categoria</h6>
        </div>
        <div class="col-4 col-md-3 col-lg-5">
          <select class="form-select form-select-sm" aria-label="filtro categoria">
            <option value="">Selecione</option>
            <option value="Brinquedos">Brinquedos</option>
            <option value="Construção">Construção</option>
            <option value="Eletrodomésticos">Eletrodomésticos</option>
            <option value="Higiene Pessoal">Higiene Pessoal</option>
            <option value="Itens para Pets">Itens para Pets</option>
            <option value="Livros">Livros</option>
            <option value="Mantimentos">Mantimentos</option>
            <option value="Móveis">Móveis</option>
            <option value="Outros">Outros</option>
            <option value="Produtos de Limpeza">Produtos de Limpeza</option>
            <option value="Roupas">Roupas</option>
          </select>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <h6 class="mb-0">Ordenar</h6>
        </div>
        <div class="col-3 col-sm-4 col-md-3">
          <select class="form-select form-select-sm" aria-label="filtro ordem">
            <option value="">Recentes</option>
            <option value="1">A-Z</option>
            <option value="2">Z-A</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiltroAnuncio',
};
</script>
