import { defineStore } from "pinia";
import { login } from "../services/auth_service";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: "",
    username: "",
    password: "",
  }),
  // use pinia-plugin-persistedstate to store token in localStorage
  persist: {
    key: "token",
    paths: ["token"],
  },
  actions: {
    async Login(userInfo: {}) {
      await login(userInfo);
    },
    async Logout() {
      this.$reset();
    },
  },
});
