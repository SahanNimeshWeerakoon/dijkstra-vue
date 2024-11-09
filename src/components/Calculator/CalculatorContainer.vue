<template>
    <div class="calculator-container">
        <div class="calculator-form-wrapper">
            <CalculatorForm />
        </div>
        <div class="calculator-result-wrapper">
            <ResultPlaceholder />
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import CalculatorForm from './CalculatorForm.vue';
    import ResultPlaceholder from './ResultPlaceholder.vue';

    export default defineComponent({
        name: 'CalculatorContainer',
        components: {
            CalculatorForm,
            ResultPlaceholder
        },
        data() {
            return {
                result: { from: "", to: "", path: "", distance: "" }
            }
        },
        props: {},
    });
</script>
<style scoped>
    .calculator-container {
        background: #FFFFFF;
        width: 50%;
        margin: 0px auto 0px auto;
        border-radius: 8px;
        -webkit-box-shadow: 0px 8px 22px 2px rgba(0,0,0,0.12);
        -moz-box-shadow: 0px 8px 22px 2px rgba(0,0,0,0.12);
        box-shadow: 0px 8px 22px 2px rgba(0,0,0,0.12);
        min-height: 300px;
        margin-top: -115px;
        display: flex;
    }
    .calculator-form-wrapper,
    .calculator-result-wrapper {
        width: 50%;    
    }
</style>