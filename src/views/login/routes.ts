import LoginModule from './LoginModule.vue'
import SignInView from './views/SignInView.vue'

export const LoginRoutes = [
  {
    path: "/login",
    name: "Login",
    redirect: "/login/sign-in",
    component: LoginModule,
    children: [
      {
        path: "sign-in",
        name: "SignIn",
        component: SignInView,
      },
    ],
  },
]

export default LoginRoutes