<template>
    <div class="input-group">
        <div class="bar">
            <input type="text" id="input-field" class="form-control" v-model="inputText"/>
        </div>
        <div class="search-button">
            <button class="btn btn-secondary btn-lg" v-on:click="onSubmit">SEARCH</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputText: "",
            };
        },
        methods: {
            onSubmit() {
                alert("Search text: " + this.inputText)
                console.log("Search text: " + this.inputText);
            },
        },
    };
</script>

<style scoped>
    #input-field {
        width: 800px;
        color: white;
        background-color: rgba(66, 66, 66, 0.8);
        border-radius: 4px;
        padding:20px 20px 27px 10px;
    }
    .form-control:focus {
        background-color: rgba(35, 35, 35, 0.8);
        border-color: rgba(35, 35, 35, 0.8);
        color: white;
    }
    .form-control {
        height: 60px;
    }
    .bar {
        display: inline-block;
        float: left;
    }
    .btn-lg{
        width: 200px;
        height: 60px;
    }
    .search-button {
        display: inline-block;
        float: left;
        padding-left: 10px;
    }

</style>
