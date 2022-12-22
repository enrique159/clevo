import HomeModule from './HomeModule.vue';

export const HomeRoutes = [
  {
    path: "/home",
    name: "Home",
    component: HomeModule,
    meta: {
      requiresAuth: true,
    },
  }
]

export default HomeModule;