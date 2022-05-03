import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";
import router from "./router";
import { worker } from "./mocks/browser";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

if (process.env.NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "bypass", // Performs an unhandled request as-is.
  });
}

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).use(router).mount("#app");
