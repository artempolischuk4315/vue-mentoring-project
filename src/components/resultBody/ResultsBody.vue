<template>
  <div class="results-body">
    <div class="result-items" v-for="film in allSelectedFilms" :key="film.id">
      <SearchResultItem
        :id="film.id"
        :genres="film.genres"
        :poster_path="film.poster_path"
        :title="film.title"
        :release_date="film.release_date"
      ></SearchResultItem>
    </div>
  </div>
</template>

<script>
import SearchResultItem from "./SearchResultItem";
import {mapActions, mapGetters} from 'vuex';

export default {
  methods: mapActions(['fetchFilms']),
  computed: mapGetters(['allSelectedFilms']),
  components: {
     SearchResultItem
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
  min-height: 600px;
}

.result-items {
  display: inline-block;
  padding: 40px;
}
</style>
