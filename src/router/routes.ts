import NotFoundView from "@/views/NotFoundView.vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import PosLayout from "@/layouts/PosLayout.vue"

// Modules
import { LoginRoutes } from "@/views/login/routes"
import { HomeRoutes } from "@/views/home/routes"
import { BillsRoutes } from "@/views/bills/routes"
import { ProductsRoutes } from "@/views/products/routes"
import { SalesRoutes } from "@/views/sales/routes"

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    redirect: "/home",
    component: DefaultLayout,
    meta: { requiresAuth: false },
    children: [
      ...HomeRoutes,
      ...BillsRoutes,
      ...ProductsRoutes,
    ],
  },
  {
    path: "/pos",
    name: "PosLayout",
    redirect: "/sales",
    component: PosLayout,
    meta: { requiresAuth: false },
    children: [
      ...SalesRoutes,
    ],
  },
  ...LoginRoutes,
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFoundView,
  },
]

export default routes