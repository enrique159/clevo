import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/userStore";

import type { User } from "@/types/User.type";

export const useUser = () => {
  const userStore = useUserStore();
  const { user, token } = storeToRefs(userStore);

  const setUser = (value: User) => {
    user.value = value
  };

  const setToken = (value: string) => {
    userStore.setToken(value)
  };

  return {
    // Properties
    user,
    token,
    // Methods
    setUser,
    setToken,
  };
}