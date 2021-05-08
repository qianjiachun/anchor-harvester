import request from "@/utils/http/http"

export function getTaskList() {
    return request({
        url: "/douyu/getTaskList",
        method: 'GET',
    })
}