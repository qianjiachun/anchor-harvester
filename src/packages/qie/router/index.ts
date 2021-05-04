import Layout from "@/layout"
export const routes = [
    {
        path: '/qie',
        name: 'qie',
        meta: {title: "企鹅"},
        redirect: "/qie",
        component: Layout,
        children: [
            {
                path: "",
                component: () => import("../views/index")
            }
        ]
    }
]