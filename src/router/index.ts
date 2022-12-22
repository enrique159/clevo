import { createWebHistory, createRouter } from "vue-router";

import routes from "./routes";

import { useUser } from "@/composables/stores/useUser";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { user } = useUser();
  if (to.meta.requiresAuth) {
    if (!user.value._id) next({ name: "Login" });
    next();
  } else {
    if (to.name === "Login") {
      if (user.value._id) next({ name: "Home" });
    }
    next();
  }
})

export default router;