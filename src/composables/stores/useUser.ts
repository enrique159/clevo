import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/userStore";
import { User } from '@/app/modules/Users/domain/interfaces'
import { Auth } from "@/app/auth/domain/interfaces";
import decode from 'jwt-decode'

export const useUser = () => {
  const userStore = useUserStore();
  const { user, token } = storeToRefs(userStore);

  // Methods
  const setUser = (value: User) => {
    user.value = value
  };
  const setToken = (value: string) => {
    token.value = value
  };
  const logout = () => {
    userStore.logout()
  };

  const validateToken = () => {
    if (!token.value) return false

    const decodedToken = decode(token.value)
    if (!decodedToken) return false

    const { exp } = decodedToken as any
    if (!exp) return false

    let date = new Date(0)
    date.setUTCSeconds(exp)

    return date.valueOf() > new Date().valueOf()
  }

  // Actions
  const signIn = (credentials: Auth) => {
    return userStore.signIn(credentials)
  };
  const isAuth = () => {
    return userStore.isAuth()
  };

  return {
    // Properties
    user,
    token,
    // Methods
    setUser,
    setToken,
    logout,
    validateToken,
    // Actions
    signIn,
    isAuth
  };
}