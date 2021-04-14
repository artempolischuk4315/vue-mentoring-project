<template>
  <div id="result-item" class="result-item">
    <div class="item-image" v-image-directive @click="openItemCard">
      <img :data-url="poster_path"
           class="film-img"
           alt="film" />
    </div>
    <div class="item-info">
      <div class="item-title-and-genre">
        <div class="item-title">
          {{ title }}
        </div>
        <div class="genres">
          <div class="item-genre" v-for="(genre, index) in genres" :key="genre.id">
            <span v-if="index !== 0">, </span>
            <span>{{genre}}</span>
          </div>
        </div>
      </div>
      <div class="item-production-year">
        <span class="border">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";


export default {
  data() {
    return {
      date: Date
    };
  },
  props: {
    id: Number,
    poster_path: String,
    title:  String,
    genres: Array,
    release_date: String
  },
  /*directives: {
    lazyLoadDirective: imageDirective
  },*/
  created() {
    this.date = new Date(this.release_date).getFullYear();
  },
  computed: mapGetters(['filterFilmsByGenre']),
  methods: {
    ...mapMutations(["updateCurrentFilmCardGenre", "updateSelectedFilms", "updateSearchFieldInput"]),
    openItemCard() {
      this.updateCurrentFilmCardGenre(this.genres[0])
      this.updateSelectedFilms(this.filterFilmsByGenre(this.genres[0]))
      this.updateSearchFieldInput(this.genres[0])
      this.$router.push("/card/" + this.id);
    }
  }
};
</script>

<style scoped>
.result-item {
  width: 400px;
}
.item-info {
  margin-top: 15px;
  display: flex;
}
.item-title {
  text-align: left;
  width: 100%;
  font-size: 130%;
  color: white;
}
.item-production-year {
  font-size: 120%;
  margin-left: auto;
  color: white;
}
.border {
  border-radius: 4px;
  padding: 2px 8px;
  color: white;
}
.film-img {
  width: 100%;
}
.genres {
  width: 100%;
  text-align: left;
}
.item-genre {
  font-size: 100%;
  color: white;
  display: inline-block;
}
</style>
