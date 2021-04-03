<template>
    <div class="mid-panel">
      <div class="content">
      <div class="count-panel">
        <div class="message">{{filmsCount}} movies found</div>
      </div>
      <div class="results-sorter-block">
        <results-sorter class="sorter"></results-sorter>
      </div>
      </div>
    </div>
</template>

<script>
    import ResultsSorter from "./ResultsSorter.vue";
    export default {
        components: {
            "results-sorter": ResultsSorter
        }
    };
</script>

<style scoped>
    .results-sorter-block {
      margin-bottom: auto;
      margin-top: auto;
      margin-left: auto;
      padding-right: 40px;
      order: 2;
    }
    .count-panel {
      padding-left: 40px;
      margin-bottom: auto;
      margin-top: auto;
      font-size: 25px;
      font-weight: lighter;
    }
    .mid-panel {
      background-color: #555555;
      width: 100%;
      display: flex;
      padding: 10px 5px;
      margin: 0 auto;
    }
    .content {
      width: 65%;
      background-color: #555555;
      display: flex;
      padding: 10px 5px;
      margin: 0 auto;
    }
    .message {
      color: white;
      font-size: 25px;
    }
</style>
