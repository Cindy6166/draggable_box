import { defineStore } from "pinia";
import { login } from "../services/auth_service";
import { getToken, setToken, removeToken } from "../services/token_service";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: getToken() || "",
    username: "",
    password: "",
    isLogin: !!getToken(),
  }),
  actions: {
    async Login(userInfo: {}) {
      const { data } = await login(userInfo);
      setToken(data.token);
      this.isLogin = true;
    },
    async Logout() {
      removeToken();
      this.$reset();
    },
  },
});
