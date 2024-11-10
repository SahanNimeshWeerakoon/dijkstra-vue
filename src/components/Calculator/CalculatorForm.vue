<template>
    <div class="calculator-form">
        <p class="calculator-form-title">Select Path</p>
        <form>
            <div class="calculator-form-input-wrapper">
                <label for="from">From Node</label>
                <select id="from" v-model="localStartNode" class="calculator-form-select">
                    <option disabled value="">Slect</option>
                    <option v-for="node in nodes" :key="node" :value="node">{{ node }}</option>
                </select>
            </div>
            <div class="calculator-form-input-wrapper">
                <label for="to">To Node</label>
                <select id="to" v-model="localTargetNode" class="calculator-form-select">
                    <option disabled value="">Select</option>
                    <option v-for="node in nodes" :key="node" :value="node">{{ node }}</option>
                </select>
            </div>
            <div class="calculator-form-buttons">
                <button class="calculator-form-buttons-clear" type="button" @click="handleClear">Clear</button>
                <button class="calculator-form-buttons-calculate" type="button" @click="findShortestPath">
                    Calculate
                    <img src="../../assets/images/calculator.png" />
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
    import {
        ref,
        watch,
        PropType,
        defineComponent,
        type Ref,
        type SetupContext,
    } from 'vue';

    // TODO - get this interface to seperate file
    interface DijkstraResult {
        distance: number | null;
        path: string[] | null;
    }

    export default defineComponent({
        name: 'CalculatorForm',
        props: {
            nodes: {
                type: Array as PropType<string[]>,
                required: true
            },
            startNode: {
                type: String,
                required: true
            },
            targetNode: {
                type: String,
                required: true
            },
            result: {
                type: Object as PropType<DijkstraResult>,
                required: true
            },
            findShortestPath: {
                type: Function as () => (e: Event) => void,
                required: true
            },
            clear: {
                type: Function as () => () => void,
                required: true
            }
        },
        emits: ['update:startNode', 'update:targetNode'],
        setup(props, { emit }: SetupContext<{
            'update:startNode': (value: string) => void,
            'update:targetNode': (value: string) => void,
        }>) {
            const localStartNode = ref(props.startNode);
            const localTargetNode = ref(props.targetNode);

            const handleClear = () => {
                props.clear();
                localStartNode.value = ""
                localTargetNode.value = ""
            }

            watch(localStartNode, (newVal: string) => emit('update:startNode', newVal));
            watch(localTargetNode, (newVal: string) => emit('update:targetNode', newVal));

            return {
                handleClear,
                localStartNode,
                localTargetNode,
            }
        }
    });
</script>
<style scoped>
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
    .calculator-form-buttons button:hover {
        cursor: pointer;
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