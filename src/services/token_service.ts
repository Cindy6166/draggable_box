const TOKEN_KEY = "token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (accessToken: string) => localStorage.setItem(TOKEN_KEY, accessToken)
export const removeToken = () => localStorage.removeItem(TOKEN_KEY)