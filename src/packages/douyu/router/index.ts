export const routes = [
    {
        path: '/douyu',
        name: 'douyu',
        meta: {title: "斗鱼"},
        component: () => import('../views/index'),
    }
]