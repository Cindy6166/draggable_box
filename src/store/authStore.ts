import { defineStore } from 'pinia'
import { login, logout } from '../services/auth_service'
import { getToken, setToken, removeToken } from '../services/token_service'

export const useAuthStore = defineStore("auth",{
  state: () => ({
    token: getToken() || '' ,
    username: '',
    password: ''
  }),
  actions: {
    async Login(userInfo: { username: string, password: string }) {
      const { username, password } = userInfo
      const { data } = await login({ username, password })
      setToken(data.accessToken)
    },
    async LogOut() {
      if (this.token === ''){
        throw Error('LogOut: token is undefined!')
      }
      await logout()
      removeToken()
    }
  }
})
