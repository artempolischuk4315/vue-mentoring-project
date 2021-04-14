<template>
  <div class="card-menu">
    <div class="first-block">
      <ItemCard class="item-card"></ItemCard>
    </div>
    <div class="mid-panel">
      <div class="info-block">
        <Information/>
      </div>
    </div>
    <ResultsBody class="results-body"></ResultsBody>
  </div>
</template>

<script>
import ResultsBody from "./../components/resultBody/ResultsBody.vue";
import ItemCard from "./../components/itemCard/ItemCard";
import Information from "../components/itemCard/Information";
export default {
  components: {
    ResultsBody,
    ItemCard,
    Information
  }
};
</script>

<style lang="scss">
.mid-panel {
  height: 80px;
  background-color: #555555;
  width: 100%;
  display: flex;
  padding: 10px 5px;
  margin: 0 auto;
}
.info-block {
  padding-left: 150px;
  margin-bottom: auto;
  margin-top: auto;
}
.card-menu {
  width: fit-content;
}
</style>
