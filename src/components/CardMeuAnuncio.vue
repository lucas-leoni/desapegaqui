<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo.png" class="card-img-top p-5" alt="img-anuncio" />
    <div class="card-body">
      <h5 class="card-title d-flex justify-content-between">
        {{ announcement.title }}
        <span v-if="donated" class="badge rounded-pill bg-success">
          <small>Doado</small>
        </span>
        <span v-if="received" class="badge rounded-pill bg-success">
          <small>Recebido</small>
        </span>
      </h5>
      <p class="card-text">{{ announcement.description }}</p>
      <div class="col d-flex justify-content-between">
        <div class="col-7">
          <router-link
            v-if="donation"
            :to="`/doacao/${announcement._id}`"
            class="btn btn-sm btn-primary"
          >
            <i class="bi bi-plus-circle me-1"></i> Detalhes
          </router-link>
          <router-link
            v-if="necessity"
            :to="`/necessidade/${announcement._id}`"
            class="btn btn-sm btn-primary"
          >
            <i class="bi bi-plus-circle me-1"></i> Detalhes
          </router-link>
        </div>
        <div class="col d-flex justify-content-around">
          <router-link
            v-if="donation"
            :to="`/editar-doacao/${announcement._id}`"
            class="btn btn-sm btn-warning"
            tag="button"
            :disabled="disable"
          >
            <i class="bi bi-pencil-fill"></i>
          </router-link>
          <router-link
            v-if="necessity"
            :to="`/editar-necessidade/${announcement._id}`"
            class="btn btn-sm btn-warning"
            tag="button"
            :disabled="disable"
          >
            <i class="bi bi-pencil-fill"></i>
          </router-link>
          <router-link
            @click.native="remove()"
            to=""
            class="btn btn-sm btn-danger"
          >
            <i class="bi bi-trash3-fill"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'CardMeuAnuncio',
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
    donated() {
      return this.announcement.status === 'donated';
    },
    received() {
      return this.announcement.status === 'received';
    },
    disable() {
      return this.announcement.status !== 'active';
    },
  },
  methods: {
    remove() {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Deseja remover o anúncio?') === true) {
        const { _id } = this.announcement;
        api
          .delete(`/announcement/${_id}`)
          .then(() => {
            this.$emit('update');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
