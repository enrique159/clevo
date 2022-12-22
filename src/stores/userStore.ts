import { defineStore } from "pinia";
import type { UserState } from "@/types/stores/UserState.type";
import { User } from "@/app/modules/Users/domain/interfaces"
import { SignInUseCase } from "@/app/auth/useCases/SignIn.useCase";
import { AuthRepository } from "@/app/auth/repository/AuthRepository";
import { Auth } from "@/app/auth/domain/interfaces";
import { IsAuthUseCase } from "@/app/auth/useCases/IsAuth.useCase";
 
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    user: {
      _id: '',
      name: '',
      email: '',
      role: ''
    }
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUser(value: User) {
      this.user = value
    },
    logout() {
      this.user = {
        _id: '',
        name: '',
        email: '',
        role: ''
      }
    },

    // SIGN IN
    signIn(credentials: Auth) {
      const authRepository = new AuthRepository();
      const signInUseCase = new SignInUseCase(authRepository);
      const action = signInUseCase.execute(credentials)
      action.then((response) => {
        this.user = response.data
        return response
      }).catch((error) => {
        console.log('Error ❗️:', error.errors)
        return error
      })

      return action
    },

    // IS AUTH
    isAuth() {
      const authRepository = new AuthRepository();
      const isAuthUseCase = new IsAuthUseCase(authRepository);
      const action = isAuthUseCase.execute()
      action.then((response) => {
        this.user = response.data
        return response
      }).catch((error) => {
        console.log('Error ❗️:', error.errors)
        return error
      })

      return action
    } 
  }
})