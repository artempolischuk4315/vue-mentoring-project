<template>
    <div id="result-item" class="result-item">
        <div class="item-image" @click="openItemCard">
            <img  :src="require('@/assets/' + img + '')"
                  class="film-img"
                  alt="film"/>
        </div>
        <div class="item-info">
            <div class="item-title-and-genre">
                <div class="item-title">
                    {{title}}
                </div>
                <div class="item-genre">
                    {{genre}}
                </div>
            </div>
            <div class="item-production-year">
                <span class="border">{{year}}</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            id: {
                type: String
            },
            img: {
                type: String
            },
            title: {
                type: String
            },
            genre: {
                type: String
            },
            year: {
                type: Number
            }
        },
        methods: {
            openItemCard() {
                this.$router.push('/card/' + this.id).catch(()=>{});
            }
        }
    }
</script>

<style scoped>
    .result-item {
        width: 400px;
    }
    .item-info {
        margin-top: 15px;
        display: flex;
    }
    .item-title {
        width: 100%;
        font-size: 160%;
        color: white;
    }
    .item-production-year {
        font-size: 120%;
        margin-left: auto;
        color: white;
    }
    .border {
        border-radius: 4px;
        padding: 2px 8px;
        color: white;
    }
    .film-img {
        width: 100%;
    }
    .item-genre {
        width: 100%;
        font-size: 120%;
        color: white;
    }
</style>