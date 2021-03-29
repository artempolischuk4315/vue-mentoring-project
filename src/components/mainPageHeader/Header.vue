<template>
    <div class="main-header">
        <div class="header-bg"></div>
        <div class="header-logo">
            <logotype/>
        </div>
        <div class="search-title">FIND YOUR MOVIE</div>
        <div class="container">
            <search-bar class="search-bar"></search-bar>
            <search-filter class="search-filter"></search-filter>
        </div>
    </div>
</template>

<script>
    import Logotype from "./../Logotype"
    import SearchBar from "./SearchBar.vue";
    import SearchFilter from "./SearchFilter.vue";
    export default {
        components: {
            "search-bar": SearchBar,
            "search-filter": SearchFilter,
            "logotype": Logotype
        }
    };
</script>

<style scoped>
    .search-bar {
    }
    .search-filter {
        position: absolute;
        width: 100%;
        padding: 15px 700px 0 0;
    }
    .container {
        position: relative;
        top: 10%;
        left: 20%;
        margin-left: -50px;
    }
    .main-header {
        position: relative;
        width: 100%;
        height: 420px;
    }
    .header-bg {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;

        background-image: url("./../../assets/posters.jpg");
        -webkit-filter: blur(2px) brightness(0.35);
    }
    .header-logo {
        padding: 10px 950px 0 0;
    }
    .search-title {
        color: #f7f7f7;
        font-size: 35px;
        font-weight: lighter;
        padding: 55px 700px 10px 60px;
        letter-spacing: 2px;
    }

</style>
