<template>
  <div class="input-group">
      <input
        type="text"
        id="input-field"
        class="form-control"
        v-model="inputText"
        @keyup.enter="onSubmit"
      />
    <div class="search-button">
      <button class="btn btn-secondary btn-lg" v-on:click="onSubmit">
        SEARCH
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

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
  data() {
    return {
      inputText: ""
    };
  },

  computed: mapGetters(["getCurrentSearchFilterOption", "getCurrentSortFilmsOption", "getSearchFieldInput"]),
  methods: {
    ...mapMutations([ "updateSearchFieldInput", "chooseSearchOption"]),
    onSubmit() {
      this.updateSearchFieldInput(this.inputText)
      let currentOption = this.getCurrentSearchFilterOption;
      if(currentOption === "title")
        this.chooseSearchOption("title")
      if (currentOption === "genres")
        this.chooseSearchOption("genres")
      changeRoute.call(this);
    }
  }
};
</script>

<style scoped>
.input-group {
  width: 100%;
}
input {
  border-radius: 5px !important;
  border-color: rgba(35, 35, 35, 0.8);
  background-color: rgba(35, 35, 35, 0.8);
  color: white;
  padding: 0 10px;
}
.form-control:focus {
  background-color: rgba(35, 35, 35, 0.8);
  border-color: rgba(35, 35, 35, 0.8);
  color: white;
}
.form-control {
  height: 60px;
}
.btn-lg {
  font-size: 19px;
  padding: 9px 35px;
  height: 59px;
}
.search-button {
  float: left;
  padding-left: 10px;
}
</style>
