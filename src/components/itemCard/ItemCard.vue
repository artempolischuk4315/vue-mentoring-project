<template>
  <div class="item-header">
    <div class="header-bg"></div>
    <div class="header-top-container">
      <div class="header-logo">
        <Logotype/>
      </div>
      <div class="main-page-button">
        <router-link to="/">
          <img class="back-button" src="../../assets/search.svg" alt="main-page"
        /></router-link>
      </div>
    </div>
    <div id="result-item" class="result-item">
      <div class="item-image" v-image-directive>
        <img
          :src="film.poster_path"
          class="film-img"
          alt="film" />
      </div>
      <div class="item-info">
        <div class="item-info-without-description">
        <div class="item-row-title">
          <div class="item-title">{{ film.title }}</div>
          <div class="item-rating">{{ film.vote_average }}</div>
        </div>
        <div class="sub-info-group">
          <div class="item-subtitle">{{film.tagline}}</div>
          <div class="item-row-year">
            <div class="item-production-year">{{ date }} <span>year</span> </div>
            <div class="item-duration">{{film.runtime | durationFilter}} <span>min</span></div>
          </div>
          </div>
        </div>
        <div class="item-description">{{ film.overview }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Logotype from "./../Logotype.vue";

export default {
  components: {
    Logotype
  },
  data() {
    return {
      film: {},
      date: Date
    };
  },
  methods: mapActions(["findMovieById", "findFilmsByGenreForCardMenu"]),
  computed: {
    ...mapGetters(["getFilmCard"]),
    ...mapMutations(["updateCurrentFilmCardGenre"]),
  },
  async mounted() {
    window.scrollTo(0, 0);
    await this.findMovieById(this.$route.params.id);
    this.film = this.getFilmCard;
    this.date = new Date(this.film.release_date).getFullYear();
    await this.findFilmsByGenreForCardMenu(this.film.genres[0])
    }
};
</script>

<style scoped>

.item-header {
  position: relative;
  width: 100%;
  height: 420px;
}
.sub-info-group {
  float: left;
}
.header-bg {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 102%;

  background-image: url("./../../assets/posters.jpg");
  -webkit-filter: blur(2px) brightness(0.3);
}
.header-logo {
  float: left;
}
.item-image {
  padding: 0px 0 10px 100px;
  display: inline-block;
  vertical-align: middle;
  float: left;
}
.film-img {
  height: 310px;
}
.item-row-title {
  padding-top: 12px;
  display: inline-block;
  width: 100%;
}
.item-row-year {
  padding-top: 12px;
  width: 100%;
}
.item-info {
  padding-left: 50px;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.result-item {
  margin-top: 10px;
  float: left;
  position: relative;
}
.item-title {
  float: left;
  font-size: 42px;
  font-weight: 200;
  display: inline-block;
  color: #eae6e6;
}
.item-rating {
  border-radius: 40%;
  padding: 7px 9px;
  margin-left: 25px;
  font-weight: 400;
  border-color: white;
  font-size: 25px;
  color: #47800c;
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  float: left;
}
.item-subtitle {
  font-size: 17px;
  font-weight: 180;
  color: #b7b7b7;
  float: left;
  width: 100%;
}
span {
  font-size: 14px;
  color: #b7b7b7;
}
.item-production-year {
  font-size: 24px;
  color: #f65261;
  display: inline-block;
  font-weight: 100;
  letter-spacing: 1px;
}
.item-duration {
  font-size: 24px;
  padding-left: 18px;
  color: #f65261;
  display: inline-block;
  font-weight: 100;
  letter-spacing: 1px;
}
.item-description {
  margin-top: 20px;
  text-align: justify;
  min-width: 800px;
  max-width: 1300px;
  font-size: 14px;
  font-weight: 100;
  color: white;
  float: left;
}
.header-top-container {
  padding: 0 30px 10px;
  width: 90%;
  float: left;
}
.item-header {
  min-width: 1900px;
}
.main-page-button {
  float: right;
  padding-top: 17px;
  padding-right: 30px;
  position: relative;
}
.back-button {
  size: 25px;
}
svg {
  width: 32px;
  height: 32px;
  fill: currentColor;
  vertical-align: bottom;
}
</style>
