<template>
    <div class="results-body">
       <results-sorter></results-sorter>
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
