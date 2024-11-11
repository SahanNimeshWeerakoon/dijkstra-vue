<script lang="ts">
  import { defineComponent } from 'vue';
  import MainWrapper from "./components/MainWrapper/MainWrapper.vue"
  
  import "toastify-js/src/toastify.css"

  export default defineComponent({
    components: {
      MainWrapper
    }
  })
</script>

<template>
  <main>
    <MainWrapper />
  </main>
</template>

<style scoped>

</style>
