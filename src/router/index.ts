import { RouteRecordRaw, createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import packages from "../packages"
import HelloWorld from "@/components/HelloWorld.vue"

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
let routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/douyu",
  },
  // 404
  {
    path: '/:path(.*)*',
    redirect: "/"
  },
];
packages.modules.forEach(item => {
    routes = routes.concat(...item.routes);
})
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;