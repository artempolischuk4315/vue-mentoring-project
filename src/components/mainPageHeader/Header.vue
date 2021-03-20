<template>
    <div class="main-header">
        <form>
            <div class="container">
                <search-bar class="search-bar"></search-bar>
                <search-button class="search-button">SEARCH</search-button>
            </div>
            <search-filter class="search-filter"></search-filter>
        </form>
    </div>
</template>

<script>
    import SearchButton from "./SubmitButton.vue";
    import SearchBar from "./SearchBar.vue";
    import SearchFilter from "./SearchFilter.vue";
    export default {
        components: {
            "search-bar": SearchBar,
            "search-button": SearchButton,
            "search-filter": SearchFilter
        }
    };
</script>

<style>
    .container {
        position: fixed;
        left: 225px;
        top: 100px;
    }
    .search-bar {
        display: inline-block;
        float: left;
    }
    .search-button {
        display: inline-block;
        float: left;
    }
    .search-filter {
        position: fixed;
        left: 240px;
        top: 153px;
    }
    .main-header {
        background-color: #2c3e50;
    }
</style>
