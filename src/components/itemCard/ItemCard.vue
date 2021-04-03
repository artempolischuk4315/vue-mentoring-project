<template>
  <div id="result-item" class="result-item">
    <div class="item-image">
      <img :src="film.poster_path" class="film-img" alt="film" />
    </div>
    <div class="item-info">
      <div class="item-title">
        <p>{{ film.title }}</p>
      </div>
      <div class="item-subtitle">
        <p>{{ film.tagline }}</p>
      </div>
      <div class="item-rating">
        <p>{{ film.vote_count }}</p>
      </div>
      <div class="item-production-year">
        <span>{{ film.release_date }} year</span>
      </div>
      <div class="item-duration">
        <span>{{ film.runtime }} min</span>
      </div>
      <div class="item-description">
        <span>{{ film.overview }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      film: {}
    };
  },
  computed: {
    ...mapGetters(["getFilmById"])
  },
  mounted() {
    console.log(this.$store)
      this.film = this.getFilmById(this.$route.params.id);
    }
};
</script>

<style scoped>
.result-item {
  width: 100%;
  height: 550px;
}
.item-image {
  width: 20%;
  height: 30%;
}
img {
  width: 100%;
}
</style>
