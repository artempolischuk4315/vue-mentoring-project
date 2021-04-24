<template>
  <div class="results-body">
    <div class="result-items" v-for="film in selectFilms()" :key="film.id">
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
  methods: {
    ...mapActions(['fetchFilms']),
    selectFilms() {
      if(this.$router.currentRoute.path.includes("card"))
        return this.films = this.allSelectedFilmsForCardMenu
      return this.films = this.allSelectedFilms
    }
  },
  computed: mapGetters(['allSelectedFilms', 'allSelectedFilmsForCardMenu']),
  components: {
     SearchResultItem
  },
  data() {
    return {
      films: [],
    };
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
