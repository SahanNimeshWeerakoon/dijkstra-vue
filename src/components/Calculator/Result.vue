<template>
    <div class="result">
        <h1 class="result-title">Result</h1>
        <div class="result-output-wrapper">
            <p>From Node Name: {{startNode}}</p>
            <p>To Node Name: {{targetNode}}</p>
            <p>Path: {{path.join(",")}}</p>
            <p>Total Distance: {{distance}}</p>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Result',
        props: {
            startNode: {
                type: String,
                required: true
            },
            targetNode: {
                type: String,
                required: true
            },
            path: {
                type: Array as () => string[],
                required: true
            },
            distance: {
                type: String,
                required: true
            }
        },
    });
</script>
<style scoped>
    .result {
        padding: 24px;
        min-height: 474px;
        display: flex;
        flex-direction: column;
    }
    .result-title {
        font-size: 16px;
        color: #1154A3;
    }
    .result-output-wrapper {
        background: #FFFFFF;
        border-radius: 8px;
        padding: 20px;
        height: 100%;
    }
    .result-output-wrapper p {
        color: #5A5B5D;
    }
</style>