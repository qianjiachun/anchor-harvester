export interface ITask {
    // 任务
    zone1_id: string,
    zone1: string,
    zone2_id: string,
    zone2: string,
    anchor_num: number,
    update_time: string
}

export interface ITaskData {
    // 新增任务
    platform: string,
    zone1_id: string,
    zone2_id: string
}

export interface IDeleteTaskData {
    // 删除任务
    platform: string,
    zone1_id: string,
    zone2_id: string
}

export interface IZone {
    // 分区信息
    id: string,
    name: string
}

export interface ITaskDetail {
    // 任务信息
    [key: string]: any,
    rid: string,
    uid: string,
    nn: string,
    gender: number,
    title: string,
    fans: number,
    hot: number,
    notice: string,
    month_barrage_num: number,
    month_gift_price: number,
    update_time: string
}