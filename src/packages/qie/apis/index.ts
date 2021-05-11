import request from "@/utils/http/http"
import {ITaskData, IDeleteTaskData, ITaskDetail} from "../interfaces"

export function getTaskList() {
    return request({
        url: "/qie/getTaskList",
        method: 'GET',
    })
}

export function addTask(data: ITaskData) {
    return request({
        url: "/qie/addTask",
        method: 'POST',
        data: data
    })
}

export function deleteTask(data: IDeleteTaskData) {
    return request({
        url: "/qie/deleteTask",
        method: 'POST',
        data: data
    })
}

export function getZone() {
    return request({
        url: "/qie/getZone",
        method: 'GET',
    })
}


export function getTaskDetail(data: ITaskData) {
    return request({
        url: "/qie/getTaskDetail",
        method: 'POST',
    })
}