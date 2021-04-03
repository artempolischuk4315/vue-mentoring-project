<template>
  <div class="results-body">
    <div class="result-items" v-for="film in allFilms.slice(0, 6)" :key="film.id">
      <result-item
        :id="film.id"
        :genres="film.genres"
        :poster_path="film.poster_path"
        :title="film.title"
        :release_date="film.release_date"
      ></result-item>
    </div>
  </div>
</template>

<script>
import SearchResultItem from "./SearchResultItem";
import {mapActions, mapGetters} from 'vuex';

export default {
  methods: mapActions(['fetchFilms']),
  computed: mapGetters(['allFilms']),
  components: {
    "result-item": SearchResultItem
  },
  async mounted() {
    await this.fetchFilms()
  }
};
</script>

<style scoped>
.results-body {
  width: 100%;
  background-color: #232323;
  padding: 30px;
}

.result-items {
  display: inline-block;
  padding: 40px;
}
</style>
