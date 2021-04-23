import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index'),
  },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('/@/views/Login'),
//   },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;