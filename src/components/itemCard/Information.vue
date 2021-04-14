<template>
  <div class="info-block">
    Films by {{ getCurrentFilmCardGenre}} genre
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters(["getCurrentFilmCardGenre"])
  }
}
</script>

<style scoped>
.info-block {
  color: white;
  font-size: 25px;
}
</style>