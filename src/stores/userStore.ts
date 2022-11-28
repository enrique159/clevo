import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'
import type { UserState } from "@/types/stores/UserState.type";
import type { User } from "@/types/User.type";

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: useLocalStorage('token', ''),
    user: {
      id: 0,
      name: '',
      email: ''
    }
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token
  },
  actions: {
    setToken(value: string) {
      this.token = value
    },
    setUser(value: User) {
      this.user = value
    }
  }
})