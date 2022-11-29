<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo-nova.png" class="card-img-top" alt="img-anuncio" />
    <div class="card-body">
      <h5 class="card-title">{{ announcement.title }}</h5>
      <p class="card-text">{{ announcement.description }}</p>
      <div class="col d-flex justify-content-between">
        <router-link
          v-if="donation"
          :to="`/doacao/${announcement._id}`"
          class="btn btn-sm btn-primary">
          <i class="bi bi-plus-circle me-1"></i> Detalhes
        </router-link>
        <router-link
          v-if="necessity"
          :to="`/necessidade/${announcement._id}`"
          class="btn btn-sm btn-primary"
        >
          <i class="bi bi-plus-circle me-1"></i> Detalhes
        </router-link>
        <router-link to="" class="btn btn-sm favorito">
          <i class="bi bi-heart text-white"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAnuncio',
  props: {
    announcement: {
      type: Object,
      required: true,
    },
  },
  computed: {
    donation() {
      return this.announcement.type === 'donation';
    },
    necessity() {
      return this.announcement.type === 'necessity';
    },
  },
};
</script>

<style scoped>
.favorito {
  background-color: #fd7e14;
}
</style>
