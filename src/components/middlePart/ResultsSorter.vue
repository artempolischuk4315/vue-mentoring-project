<template>
  <div class="container">
          <div class="sorter-search-by">SORT BY</div>
        <div class="buttons">
        <input
          type="radio"
          class="btn-check"
          name="choices"
          id="choice1"
          autocomplete="off"
          v-on:click="chooseSortByReleaseDateOption"
          checked
        />
        <label class="btn btn-primary left" for="choice1">
          <p>RELEASE DATE</p>
        </label>
        <input
          type="radio"
          class="btn-check"
          name="choices"
          id="choice2"
          autocomplete="off"
          v-on:click="chooseSortByRatingOption"
        />
        <label class="btn btn-primary right" for="choice2">
          <p>RATING</p>
        </label>
      </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

function changeRoute() {
  this.$router.push({
    name: "main", query: {
      search: this.getSearchFieldInput,
      sortBy: this.getCurrentSortFilmsOption,
      searchBy: this.getCurrentSearchFilterOption,
      sortOrder: "asc"
    }
  });
}

export default {
  mounted() {
    if(this.getCurrentSortFilmsOption === "release_date")
      document.getElementById("choice1").checked = true;
    else
      document.getElementById("choice2").checked = true;
  },
  computed: mapGetters(["getCurrentSortFilmsOption", "getCurrentSearchFilterOption", "getSearchFieldInput"]),
  methods: {
    ...mapMutations(["chooseSortOption"]),
    chooseSortByReleaseDateOption() {
      this.chooseSortOption("release_date");
      changeRoute.call(this);
    },
    chooseSortByRatingOption() {
      this.chooseSortOption("vote_average");
      changeRoute.call(this);
    }
  }
};
</script>

<style scoped>
input[type="radio"] {
  opacity: 0;
  position: fixed;
  background-color: rgba(66, 66, 66, 0.8);
}
input[type="radio"]:checked + label {
  background-color: #f65261;
}
input[type="radio"] + label {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 17px;
  padding: 5px 12px;
}
.sorter-search-by {
  font-size: 18px;
  padding-right: 10px;
  padding-top: 8px;
  color: white;
  float: left;
}
.buttons {
  float: left;
}
p {
  margin: 3px auto auto auto;
  width: 100%;
}
</style>
