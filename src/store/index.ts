import { defineStore } from "pinia";

export type Position = { x: number; y: number };

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