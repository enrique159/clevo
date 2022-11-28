// import NotFoundView from "@/views/NotFoundView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

// Modules
import { HomeRoutes } from "@/views/home/routes";
import { FacturasRoutes } from "@/views/facturas/routes";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    redirect: "/home",
    component: DefaultLayout,
    children: [
      ...HomeRoutes,
      ...FacturasRoutes,
    ]
  },
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