import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useAuthStore } from "../store/authStore";

const service = axios.create({
  baseURL: "http://localhost:3000/", // process.env.VUE_APP_API
  timeout: 10000,
});

const authStore = useAuthStore();

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config?.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    // Add X-Access-Token header to every request
    if (authStore.token) {
      config.headers["X-Access-Token"] = authStore.token;
      // config.headers.Authorization =`Bearer ${store.token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    switch(res.code){
      case 200:
        return Promise.resolve(response)
      case 30001:
        return Promise.reject(new Error(response.data.msg))
      default:
        break
    }
    return Promise.resolve(response)
    
  },
  (error: AxiosError) => {
    return Promise.reject(new Error(error.message));
  }
);

export default service;