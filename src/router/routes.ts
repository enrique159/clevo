// import NotFoundView from "@/views/NotFoundView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

// Modules
import { LoginRoutes } from "@/views/login/routes";
import { HomeRoutes } from "@/views/home/routes";
import { BillsRoutes } from "@/views/bills/routes";
import { ProductsRoutes } from "@/views/products/routes";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    redirect: "/home",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      ...HomeRoutes,
      ...BillsRoutes,
      ...ProductsRoutes,
    ]
  },
  ...LoginRoutes,
  // {
  //   path: "/design-system",
  //   name: "DesignSystem",
  //   component: DesignSystemView
  // },
  // 404
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: "NotFound",
  //   component: NotFoundView
  // }
];

export default routes