<template>
  <div class="main-header">
    <div class="header-bg"></div>
    <div class="container">
      <div class="header-logo">
        <logotype />
      </div>
      <div class="search-title">FIND YOUR MOVIE</div>
      <search-bar class="search-bar"></search-bar>
      <search-filter class="search-filter"></search-filter>
    </div>
  </div>
</template>

<script>
import Logotype from "./../Logotype";
import SearchBar from "./SearchBar.vue";
import SearchFilter from "./SearchFilter.vue";
export default {
  components: {
    "search-bar": SearchBar,
    "search-filter": SearchFilter,
    logotype: Logotype
  }
};
</script>

<style scoped>
.search-bar {
  padding: 30px 0 7px;
}
.search-filter {
  padding: 7px 0 7px;
}
.main-header {
  position: relative;
  width: 100%;
  height: 420px;
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
  padding: 10px 1750px 0 0;
}
.search-title {
  color: #f7f7f7;
  font-size: 35px;
  float:left;
  padding: 50px 60px 10px 0;
  letter-spacing: 2px;
  font-weight: lighter;
}
</style>
