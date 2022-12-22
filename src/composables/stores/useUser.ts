import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/userStore";

import { User } from '@/app/modules/Users/domain/interfaces'
import { Auth } from "@/app/auth/domain/interfaces";

export const useUser = () => {
  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);

  const setUser = (value: User) => {
    user.value = value
  };

  const logout = () => {
    userStore.logout()
  };

  const signIn = (credentials: Auth) => {
    return userStore.signIn(credentials)
  };

  const isAuth = () => {
    return userStore.isAuth()
  };

  return {
    // Properties
    user,
    // Methods
    setUser,
    logout,
    signIn,
    isAuth
  };
}