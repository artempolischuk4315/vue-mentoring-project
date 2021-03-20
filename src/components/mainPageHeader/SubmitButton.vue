<template>
    <button class="btn btn-secondary btn-lg" v-on:click="clickButton">
        <slot/>
    </button>
</template>

<script>
    export default {
        methods: {
            clickButton: function () {
                console.log("Click");
            }
        }
    };
</script>

<style>
</style>
