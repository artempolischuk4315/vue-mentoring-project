<template>
  <div class="card-menu">
    <div class="first-block">
      <item-card class="item-card"></item-card>
    </div>
    <div class="mid-panel"></div>
    <results-body class="results-body"></results-body>
  </div>
</template>

<script>
import ResultsBody from "./../components/resultBody/ResultsBody.vue";
import ItemCard from "./../components/itemCard/ItemCard";
export default {
  components: {
    "results-body": ResultsBody,
    "item-card": ItemCard
  }
};
</script>

<style lang="scss">
.mid-panel {
  height: 80px;
  background-color: #555555;
}
.card-menu {
  width: fit-content;
}
</style>
