import Layout from "@/layout"
export const routes = [
    {
        path: '/huya',
        meta: {title: "虎牙"},
        redirect: "/huya",
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