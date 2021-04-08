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
      checked
    />
    <label class="btn btn-primary" for="option1">TITLE</label>

    <input
      type="radio"
      class="btn-check"
      name="options"
      id="option2"
      autocomplete="off"
    />
    <label class="btn btn-primary" for="option2">GENRE</label>
    </div>
  </div>
</template>

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
