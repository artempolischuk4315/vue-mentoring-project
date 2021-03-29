<template>
    <div class="middle-panel">
        <results-sorter class="sorter"></results-sorter>
    </div>
</template>

<script>
    import ResultsSorter from "./ResultsSorter.vue";
    export default {
        components: {
            "results-sorter": ResultsSorter
        }
    };
</script>

<style scoped>
    .sorter {
        position: relative;
        width: 100%;
        padding: 18px 0 100px 600px;
        margin: auto;
    }
    .middle-panel {
    }
</style>
