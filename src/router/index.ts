import { createWebHistory, createRouter } from "vue-router";

import routes from "./routes";

import { useUser } from "@/composables/stores/useUser";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { validateToken } = useUser();
  if (to.name === "Login" && validateToken()) {
    next({ name: "Home" });
  }
  else if (to.meta.requiresAuth && !validateToken()) {
    next({ name: "Login" });
  }
  else {
    next()
  }
})

export default router;