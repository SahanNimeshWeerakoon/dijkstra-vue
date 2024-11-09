<template>
    <div class="main-wrapper">
        <div class="header-wrapper">
            <div class="title-wrapper">
                <h1>Dijkstra’s Algorithm Calculator</h1>
                <p>Discovering Optimal Routes Through Nodes Using Dijkstra's Method</p>
            </div>
        </div>
        <CalculatorContainer />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import CalculatorContainer from '../Calculator/CalculatorContainer.vue';

    export default defineComponent({
        name: 'MainWrapper',
        components: {
            CalculatorContainer
        },
        props: {},
    });
</script>
<style scoped>
    .header-wrapper {
        background: #1154A3;
        color: #FFFFFF;
        text-align: center;
        height: 377px;
        display: flex;
        justify-content: center;
    }
    .header-wrapper h1 {
        margin: 0;
        font-size: 36px;
    }
    .header-wrapper p {
        font-size: 18px;
    }
    .title-wrapper {
        margin-top: 65px;
    }
</style>