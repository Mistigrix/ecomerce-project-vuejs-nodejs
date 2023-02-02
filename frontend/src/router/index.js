import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeView.vue';
import AllProducts from '../views/AllProducts.vue';
import ProductDetail from '../views/ProductDetail.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
