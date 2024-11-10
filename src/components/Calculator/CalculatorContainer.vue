<template>
  <div class="calculator-container">
    <div class="calculator-form-wrapper">
      <button class="calculator-container-random-button">
        <img src="../../assets/images/random.png" alt="Get random nodes" title="Get random nodes" class="calculator-container-random" />
      </button>
      <CalculatorForm
        :nodes="nodes"
        :clear="clear"
        :result="result"
        :findShortestPath="findShortestPath"
        v-model:startNode="startNode"
        v-model:targetNode="targetNode"
      />
    </div>
    <div class="calculator-result-wrapper">
      <Result
        :path="result.path"
        :startNode="startNode"
        :targetNode="targetNode"
        :distance="result.distance"
        v-if="result.distance"
      />
      <ResultPlaceholder v-else />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import CalculatorForm from "./CalculatorForm.vue";
import ResultPlaceholder from "./ResultPlaceholder.vue";
import Result from "./Result.vue";
import { dijkstra } from "../../utils/dijkstra.js";

// TODO - get this interface to seperate file
interface DijkstraResult {
  distance: number | null;
  path: string[] | null;
}

export default defineComponent({
  name: "CalculatorContainer",
  components: {
    Result,
    CalculatorForm,
    ResultPlaceholder,
  },
  setup() {
    const startNode = ref<string>("");
    const targetNode = ref<string>("");
    const result = ref<DijkstraResult>({ distance: null, path: null });
    // const nodes = ref<string[]>([
    //   {value: "A", label: "A"},
    //   {value: "B", label: "B"},
    //   {value: "C", label: "C"},
    //   {value: "D", label: "D"},
    //   {value: "E", label: "E"},
    //   {value: "F", label: "F"},
    //   {value: "G", label: "G"},
    //   {value: "H", label: "H"},
    //   {value: "I", label: "I"},
    // ]);
    const nodes = ref<string[]>(["A","B","C","D","E","F","G","H","I"]);

    const findShortestPath = (e: any) => {
      e.preventDefault();
      result.value = dijkstra(startNode.value, targetNode.value);
    };

    const clear = () => {
        result.value= { distance: null, path: null }
        startNode.value = "";
        targetNode.value = "";
    }

    return {
      nodes,
      clear,
      result,
      startNode,
      targetNode,
      findShortestPath,
    };
  },
});
</script>
<style scoped>
.calculator-container {
  background: #ffffff;
  width: 50%;
  margin: 0px auto 0px auto;
  border-radius: 8px;
  -webkit-box-shadow: 0px 8px 22px 2px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 8px 22px 2px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 8px 22px 2px rgba(0, 0, 0, 0.12);
  min-height: 344px;
  margin-top: -115px;
  display: flex;
}
.calculator-form-wrapper,
.calculator-result-wrapper {
  width: 50%;
}
.calculator-form-wrapper {
  position: relative;
}
.calculator-result-wrapper {
  background: #f2f3f6;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.calculator-container-random {
  width: 16px;
  height: 16px;
}
.calculator-container-random-button {
  position: absolute;
  right: 10px;
  top: 10px;
  background: transparent;
  border: none;
}
.calculator-container-random:hover {
  cursor: pointer;
}
</style>
