export const routes = [
    {
        path: '/huya',
        meta: {title: "虎牙"},
        name: 'huya',
        component: () => import('../views/index'),
    }
]