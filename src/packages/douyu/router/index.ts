import Layout from "@/layout/index"
import Douyu from "../views/index"
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
                component: Douyu,
            },
            {
                path: "list",
                name: "list",
                component: () => import("../views/list"),
            },
        ]
    }
]