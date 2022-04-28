import ApiService from "../services/api_service";

export const login = (data: any) =>
  ApiService({
    url: "/login",
    method: "post",
    data,
  });
