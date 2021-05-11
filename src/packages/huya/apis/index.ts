import request from "@/utils/http/http"
import {ITaskData, IDeleteTaskData, ITaskDetail} from "../interfaces"

export function getTaskList() {
    return request({
        url: "/huya/getTaskList",
        method: 'GET',
    })
}

export function addTask(data: ITaskData) {
    return request({
        url: "/huya/addTask",
        method: 'POST',
        data: data
    })
}

export function deleteTask(data: IDeleteTaskData) {
    return request({
        url: "/huya/deleteTask",
        method: 'POST',
        data: data
    })
}

export function getZone() {
    return request({
        url: "/huya/getZone",
        method: 'GET',
    })
}


export function getTaskDetail(data: ITaskData) {
    return request({
        url: "/huya/getTaskDetail",
        method: 'POST',
        data: data
    })
}