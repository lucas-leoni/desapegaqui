<template>
  <div class="container-fluid px-0 py-4">
    <div class="row">
      <div class="col d-flex align-items-center">
        <div class="col">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
        <h5 class="mb-0 ms-3">Categoria</h5>
      </div>
      <div class="col">
        <div class="row">
          <div class="col d-flex align-items-center">
            <div class="col">
              <select class="form-select" aria-label="filtro categoria">
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
          </div>
          <div class="col d-flex align-items-center">
            <h5 class="mb-0 me-3">Ordenar por</h5>
            <div class="col">
              <select class="form-select" aria-label="filtro ordem">
                <option value="">Mais recentes</option>
                <option value="1">A-Z</option>
                <option value="2">Z-A</option>
              </select>
            </div>
          </div>
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
