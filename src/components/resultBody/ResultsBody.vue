<template>
  <div class="results-body">
    <div class="result-items" v-for="film in films.slice(0, 6)" :key="film.id">
      <result-item
        :id="film.id"
        :genre="film.genre"
        :img="film.img"
        :title="film.title"
        :year="film.year"
      ></result-item>
    </div>
  </div>
</template>

<script>
import SearchResultItem from "./SearchResultItem";
import ItemService from "../../ItemService";

export default {
  data() {
    return {
      films: []
    };
  },
  methods: {},
  components: {
    "result-item": SearchResultItem
  },
  created() {
    this.films = ItemService.films;
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
