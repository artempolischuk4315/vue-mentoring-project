<template>
  <div class="container">
    <div class="search-by">SEARCH BY</div>
    <div class = "buttons">
    <input
      type="radio"
      class="btn-check"
      name="options"
      id="option1"
      autocomplete="off"
      v-on:click="chooseTitleOption"
      checked
    />
    <label class="btn btn-primary" for="option1">TITLE</label>

    <input
      type="radio"
      class="btn-check"
      name="options"
      id="option2"
      autocomplete="off"
      v-on:click="chooseGenreOption"
    />
    <label class="btn btn-primary" for="option2">GENRE</label>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";

export default {
  mounted() {
    if(this.getCurrentSearchFilterOption === "title")
      document.getElementById("option1").checked = true;
    else
      document.getElementById("option2").checked = true;
  },
  computed: mapGetters(["getCurrentSearchFilterOption"]),
  methods: {
    ...mapMutations(["chooseSearchOption"]),
    chooseGenreOption() {
      this.chooseSearchOption("genres")
    },
    chooseTitleOption() {
      this.chooseSearchOption("title")
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
  font-size: 17px;
  height: 40px;
  width: 100px;
}
.search-by {
  font-size: 18px;
  padding-right: 10px;
  padding-top: 8px;
  color: white;
  float: left;
}
.buttons {
  float: left;
}
</style>
