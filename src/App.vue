<template>
  <div id="app">
    <main-page-header></main-page-header>
    <results-body class="results-body"></results-body>
  </div>
</template>

<script>
import Header from "./components/mainPageHeader/Header.vue";
import ResultsBody from "./components/resultBody/ResultsBody.vue";
export default {
  name: "App",
  components: {
    "main-page-header": Header,
    "results-body": ResultsBody
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .results-body {
    opacity: 0;
  }
</style>
