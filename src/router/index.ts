import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import packages from "../packages"

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('@/views/Index'),
//   },
// //   {
// //     path: '/login',
// //     name: 'login',
// //     component: () => import('/@/views/Login'),
// //   },
// ];
let routes: RouteRecordRaw[] = [];
packages.modules.forEach(item => {
    routes = routes.concat(...item.routes);
})
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;