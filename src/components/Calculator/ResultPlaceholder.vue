<template>
    <div class="result-placeholder">
        <img src="../../assets/images/result-placeholder-image.png" alt="Result placeholder" />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ResultPlacholder',
        props: {},
    });
</script>
<style scoped>
    .result-placeholder {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>