<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
import { useBoxStore } from "../store";
import { storeToRefs } from "pinia";

// get position from store
const store = useBoxStore();
const { position } = storeToRefs(store);
// VueUse useDraggable()
const el = ref<HTMLElement | null>(null);
const { style } = useDraggable(el, {
  initialValue: position,
  preventDefault: true,
});
</script>

<template>
  <div
    ref="el"
    class="w-40 h-40 bg-clip-border bg-violet-600 border-4 border-violet-300 border-dashed cursor-pointer flex items-center justify-center"
    :style="style"
    style="position: fixed"
  >
    <span class="text-rose-400 text-lg font-bold text-center"
      >Drag me! <br />I am at <br />X:{{ store.getCurrentPosition.x }} Y:{{
        store.getCurrentPosition.y
      }}</span
    >
  </div>
</template>
