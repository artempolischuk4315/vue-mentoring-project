<template>
    <div class="container">
    <form>
        <label class="sorter-search-by">Sort By</label>
        <input type="radio" class="btn-check" name="choices" id="choice1" autocomplete="off" checked>
        <label class="btn btn-primary" for="choice1">
            <p>RELEASE DATE</p>
        </label>
        <input type="radio" class="btn-check" name="choices" id="choice2" autocomplete="off">
        <label class="btn btn-primary" for="choice2">
            <p>RATING</p>
        </label>
    </form>
    </div>
</template>

<style scoped>
    input[type="radio"] {
        opacity: 0;
        position: fixed;
        background-color: rgba(66, 66, 66, 0.8);
    }
    input[type="radio"]:checked + label {
        background-color: #F65261;
    }
    input[type="radio"] + label {
        margin-top: auto;
        margin-bottom: auto;
        font-size: 17px;
        padding: 5px 12px;
    }
    .sorter-search-by {
        color: white;
        padding: 9px 5px 4px 5px;
        border-radius: 4px;
    }
    p {
        margin: 3px auto auto auto;
        width: 100%;
    }
</style>
