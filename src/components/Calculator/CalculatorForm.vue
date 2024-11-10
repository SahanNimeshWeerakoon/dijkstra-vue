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
        <!-- <CustomDropdown :list="nodes" /> -->
      </div>
      <div class="calculator-form-input-wrapper">
        <label for="to">To Node</label>
        <select id="to" v-model="localTargetNode" class="calculator-form-select">
          <option disabled value="">Select</option>
          <option v-for="node in nodes" :key="node" :value="node">{{ node }}</option>
        </select>
        <!-- <CustomDropdown :list="nodes" /> -->
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
      <div class="calculator-form-buttons">
        <button class="calculator-form-buttons-clear" type="button" @click="handleClear">
          Clear
        </button>
        <button
          class="calculator-form-buttons-calculate"
          type="button"
          @click="handleCalculate"
        >
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
import CustomDropdown from '../CustomDropdown/CustomDropdown.vue'
import { ListItem } from '../CustomDropdown/types.ts'

// TODO - get this interface to seperate file
interface DijkstraResult {
    distance: number | null;
    path: string[] | null;
}

export default defineComponent({
    name: 'CalculatorForm',
    components: {
      CustomDropdown
    },
    props: {
        nodes: {
            type: Array as PropType<{ListItem}[]>,
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
        const errorMessage = ref("");
        const localStartNode = ref(props.startNode);
        const localTargetNode = ref(props.targetNode);

        const handleClear = () => {
            props.clear();
            localStartNode.value = ""
            localTargetNode.value = ""
        }

        const handleCalculate = (e: Event) => {
            if(!localStartNode.value || !localTargetNode.value) {
                errorMessage.value = "Please select From Node and To Node";
                return;
            }
            errorMessage.value = "";
            props.findShortestPath(e);
        }

        watch(localStartNode, (newVal: string) => {
            if(newVal && localTargetNode.value) {
                errorMessage.value = ""
            }
            emit('update:startNode', newVal)
        });
        watch(localTargetNode, (newVal: string) => {
            if(newVal && localStartNode.value) {
                errorMessage.value = ""
            }
            emit('update:targetNode', newVal)
        });

        return {
            handleClear,
            errorMessage,
            localStartNode,
            handleCalculate,
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
  color: #1154a3;
  font-size: 20px;
  font-weight: 600;
}
.calculator-form-select {
  width: 100%;
  border: 1px solid #d9dadd;
  padding: 10px;
  border-radius: 8px;
}
.calculator-form-input-wrapper {
  margin-bottom: 30px;
}
.error-message {
  color: #c41e3a;
  font-size: 14px;
  padding-left: 5px;
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
  color: #da753c;
  border: 1px solid;
  margin-right: 30px;
}
.calculator-form-buttons-calculate {
  display: flex;
  align-items: center;
  color: #ffffff;
  background: #da753c;
  border: none;
}
.calculator-form-buttons-calculate img {
  margin-left: 5px;
}
</style>
