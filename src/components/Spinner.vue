<script setup lang="ts">
const props = defineProps({
  isLoading: { type: Boolean, required: true },
});
</script>
<template>
  <div
    v-if="props.isLoading"
    style="border-top-color: transparent"
    class="w-6 h-6 border-2 border-blue-400 border-solid rounded-full animate-spin mx-2"
  ></div>
</template>
