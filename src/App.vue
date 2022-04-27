<script setup lang="ts">
import { useBoxStore } from "./store/draggableBox";
const store = useBoxStore();
</script>

<template>
  <div v-if="$route.name !== 'login'" class="text-center px-6 py-3">
    <span
      class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500"
      >Welcome to {{ $route.name }} page!</span
    >
  </div>

  <nav v-if="$route.name !== 'login'" class="flex justify-center">
    <router-link
      to="/login"
      class="bg-rose-700 text-white active:bg-rose-900 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      >Login</router-link
    >
    <router-link
      to="/"
      class="mr-5 bg-rose-700 text-white active:bg-rose-900 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      >Home</router-link
    >
    <router-link
      to="/draggableBox"
      class="bg-rose-700 text-white active:bg-rose-900 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      >DraggableBox</router-link
    >
  </nav>
  <router-view />
  <!-- display Box's instant position  -->
  <div v-if="$route.path === '/draggableBox'" class="text-center">
    <span
      class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
      >X:{{ store.getCurrentPosition.x }} Y:{{ store.getCurrentPosition.y }}
    </span>
  </div>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background: #1d252e;
}
</style>
