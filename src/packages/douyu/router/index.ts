import Layout from "@/layout/index"
export const routes = [
    {
        path: '/douyu',
        component: Layout,
        meta: {title: "斗鱼"},
        redirect: "/douyu",
        children: [
            {
                path: "",
                name: "index",
                component: () => import("../views/index"),
            },
            {
                path: "list",
                name: "list",
                component: () => import("../views/list"),
            },
        ]
    }
]