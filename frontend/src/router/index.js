import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeView.vue';
import AllProducts from '../views/AllProducts.vue';
import ProductDetail from '../views/ProductDetail.vue';
import UpdateProduct from '../views/UpdateProduct.vue';
import CategoryProduct from '../views/CategoryProducts.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/all-products',
    name: 'allProducts',
    component: AllProducts,
  },
  {
    path: '/product-detail/:product_name',
    name: 'productDetail',
    component: ProductDetail
  },
  {
    path: '/categories/:category',
    name: 'categoryProducts',
    component: CategoryProduct
  },
  {
    path: '/product/:product_name/update',
    name: 'updateProduct',
    component: UpdateProduct
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
