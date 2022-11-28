<template>
  <h2 class="m-0">{{titulo}}</h2>
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
