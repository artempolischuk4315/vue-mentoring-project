<template>
  <div id="app">
    <main-page-header class="main-page-header"></main-page-header>
    <middle-panel class="middle-panel"></middle-panel>
    <results-body class="results-body"></results-body>
    <div class="bottom-panel">
      <logotype class="logo"></logotype>
    </div>
  </div>
</template>

<script>
import MiddlePanel from "../components/middlePart/MiddlePanel";
import Header from "./../components/mainPageHeader/Header.vue";
import ResultsBody from "./../components/resultBody/ResultsBody.vue";
import Logotype from "./../components/Logotype";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    "middle-panel": MiddlePanel,
    "main-page-header": Header,
    "results-body": ResultsBody,
    logotype: Logotype
  },
  computed: mapGetters(["allSelectedFilms"]),
  methods: {
    ...mapActions(["performSimpleQueryToApi"]),
    ...mapMutations(["updateSearchFieldInput", "chooseSearchOption", "chooseSortOption"])
  },
  watch: {
    '$route': {
      handler: function() {
        if(this.$router.currentRoute.fullPath !== "/" || this.allSelectedFilms.length === 0) {
          this.performSimpleQueryToApi()
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">
.bottom-panel {
  height: 80px;
  background-color: #555555;
}
.logo {
  padding-top: 22px;
}
#app {
  width: border-box;
}
</style>
