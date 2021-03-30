<template>
    <div id="result-item" class="result-item">
        <div class="item-image">
            <img  :src="require('@/assets/' + film.img + '')"
                  class="film-image"
                  alt="film"/>
        </div>
        <div class="item-info">
            <div class="item-title">
                <p>{{film.title}}</p>
            </div>
            <div class="item-subtitle">
                <p>{{film.subtitle}}</p>
            </div>
            <div class="item-rating">
                <p>{{film.rating}}</p>
            </div>
            <div class="item-production-year">
                <span>{{film.year}} year</span>
            </div>
            <div class="item-duration">
                <span>{{film.duration}} min</span>
            </div>
            <div class="item-description">
                <span>{{film.description}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemService from "../../ItemService";

    export default {
        data() {
            return {
                film: {}
            }
        },
        created() {
            ItemService.$on("openItemCard", (cardToShow) => {
                this.film = cardToShow;
            })
        },
        mounted() {
            ItemService.openItemCard(this.$route.params.id);
        }
    }
</script>

<style scoped>
    .result-item {
        width: 100%;
        height: 550px;
    }
    .item-image {
        width: 20%;
        height: 30%;
    }
    img {
        width: 100%;
    }
</style>