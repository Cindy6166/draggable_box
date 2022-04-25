import { defineStore } from "pinia";
import { ref } from "vue";

export type Position = { x: number; y: number };

//* or using setup store syntax
export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('hello pinia')
    return { someState }
  },
  {
    persist: true,
  },
)

export const useBoxStore = defineStore("draggableBox", {
  state: () => ({
    position: { x: 40, y: 40 } as Position,
  }),
  getters: {
    getCurrentPosition(): Position {
      const X = Math.round(this.position.x);
      const Y = Math.round(this.position.y);
      return { x: X, y: Y };
    },
  },
  actions: {},
});
