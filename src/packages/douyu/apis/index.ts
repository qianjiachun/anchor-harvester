import request from "@/utils/http/http"
import {ITaskData, IDeleteTaskData, ITaskDetail} from "../interfaces"

export function getTaskList() {
    return request({
        url: "/douyu/getTaskList",
        method: 'GET',
    })
}

export function addTask(data: ITaskData) {
    return request({
        url: "/douyu/addTask",
        method: 'POST',
        data: data
    })
}

export function deleteTask(data: IDeleteTaskData) {
    return request({
        url: "/douyu/deleteTask",
        method: 'POST',
        data: data
    })
}

export function getZone1() {
    return request({
        url: "/douyu/getZone1",
        method: 'GET',
    })
}

export function getZone2() {
    return request({
        url: "/douyu/getZone2",
        method: 'GET',
    })
}

export function getTaskDetail(data: ITaskData) {
    return request({
        url: "/douyu/getTaskDetail",
        method: 'POST',
        data: data
    })
}