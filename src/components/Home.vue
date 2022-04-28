<script setup lang="ts">
import { useBoxStore } from "../store/draggableBox";
import { useAuthStore } from "../store/authStore";
import router from "../router";

const boxStore = useBoxStore();

async function onLogout() {
  await useAuthStore().Logout();
  router.replace("/login");
}
</script>

<template>
  <div v-if="$route.name !== 'login'" class="text-center px-6 py-3">
    <span
      class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500"
      >Welcome to {{ $route.name }} page!</span
    >
    <button
      class="bg-sky-400 text-white rounded-full px-3 py-1 fixed right-0 hover:bg-sky-800 m-2"
      @click="onLogout"
    >
      Logout
    </button>
  </div>
  <nav v-if="$route.name !== 'login'" class="flex justify-center">
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
      >X:{{ boxStore.getCurrentPosition.x }} Y:{{
        boxStore.getCurrentPosition.y
      }}
    </span>
  </div>
</template>
