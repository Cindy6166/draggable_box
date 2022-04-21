<script setup lang="ts">
import DraggableBox from "./components/DraggableBox.vue";
import { useBoxStore } from "./store";

const store = useBoxStore();
</script>

<template>
<!-- display Box's instant position  -->
  <div class="text-center">
    <span
      class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
      >X:{{ store.getCurrentPosition.x }} Y:{{
        store.getCurrentPosition.y
      }}</span
    >
  </div>
<!-- DraggableBox component -->
  <DraggableBox />
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background: #1d252e;
}
</style>
