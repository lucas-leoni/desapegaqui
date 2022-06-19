<template>
  <h1 class="m-0">{{titulo}}</h1>
</template>

<script>
export default {
  name: 'TituloPaginas',
  props: {
    titulo: {
      type: String,
      required: true,
    },
  },
};
</script>
