<template>
    <form>
        <label class="search-by">Sort By</label>
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
        <label class="btn btn-primary" for="option1">RELEASE DATE</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
        <label class="btn btn-primary" for="option2">RATING</label>
    </form>
</template>

<style>
    input[type="radio"] {
        opacity: 0;
        position: fixed;
        background-color: rgba(66, 66, 66, 0.8);
    }
    input[type="radio"]:checked + label {
        background-color: #F65261;
    }
    input[type="radio"] + label {
        width: 130px;
    }
    .search-by {
        color: white;
        padding: 9px 5px 4px 5px;
        border-radius: 4px;
    }
</style>