import ApiService from "../services/api_service";

export const login = (data: any) =>
  ApiService({
    url: "/users/login",
    method: "post",
    data,
  });

export const logout = () =>
  ApiService({
    url: "/users/logout",
    method: "post",
  });
