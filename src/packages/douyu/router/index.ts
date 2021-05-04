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
                component: () => import("../views/index"),
            },
            
        ]
    }
]