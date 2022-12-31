import ProductsModule from './ProductsModule.vue';
import ProductsView from './views/ProductsView.vue';

export const ProductsRoutes = [
  {
    path: "/products",
    name: "Productos",
    component: ProductsModule,
    children: [
      {
        path: "",
        name: "Productos",
        component: ProductsView,
      },
    ],
  }
]

export default ProductsRoutes;