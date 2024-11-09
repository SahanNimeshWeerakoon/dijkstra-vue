<template>
    <div class="calculator-form">
        <p class="calculator-form-title">Select Path</p>
        <form>
            <div class="calculator-form-input-wrapper">
                <label for="from">From Node</label>
                <select id="from" class="calculator-form-select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                    <option>G</option>
                    <option>H</option>
                    <option>I</option>
                </select>
            </div>
            <div class="calculator-form-input-wrapper">
                <label for="to">To Node</label>
                <select id="to" class="calculator-form-select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                    <option>G</option>
                    <option>H</option>
                    <option>I</option>
                </select>
            </div>
            <div class="calculator-form-buttons">
                <button class="calculator-form-buttons-clear">Clear</button>
                <button class="calculator-form-buttons-calculate">
                    Calculate
                    <img src="../../assets/images/calculator.png" />
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CalculatorForm',
        props: {},
    });
</script>
<style scoped>
    .calculator-form,
    .calculator-form form,
    .calculator-form form div, 
    .calculator-form form div label, 
    .calculator-form form div select {
        width: 100%;
    }

    .calculator-form {
        padding: 24px;
    }
    .calculator-form-title {
        color: #1154A3;
        font-size: 20px;
        font-weight: 600;
    }
    .calculator-form-select {
        width: 100%;
        border: 1px solid #D9DADD;
        padding: 10px;
        border-radius: 8px;    
    }
    .calculator-form-input-wrapper {
        margin-bottom: 30px;
    }
    .calculator-form-buttons button {
        padding: 5px;
        font-size: 16px;
        border-radius: 8px;
        padding: 10px;
    }
    .calculator-form-buttons {
        display: flex;
        align-items: center;
    }
    .calculator-form-buttons-clear {
        background: transparent;
        color: #DA753C;
        border: 1px solid;
        margin-right: 30px;
    }
    .calculator-form-buttons-calculate {
        display: flex;
        align-items: center;
        color: #FFFFFF;
        background: #DA753C;
        border: none;
    }
    .calculator-form-buttons-calculate img {
        margin-left: 5px;
    }
</style>