<template>
  <div class="container">
    <label class="search-by">Search By</label>
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
  width: 100px;
}
.search-by {
  color: white;
  border-radius: 4px;
  padding: 9px 12px 4px 5px;
}
</style>
