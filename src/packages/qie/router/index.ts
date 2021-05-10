import Layout from "@/layout"
export const routes = [
    {
        path: '/qie',
        meta: {title: "企鹅"},
        redirect: "/qie",
        component: Layout,
        children: [
            {
                path: "",
                component: () => import("../views/index")
            },
            {
                path: "list",
                component: () => import("../views/list")
            }
        ]
    }
]