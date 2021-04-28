import axios from "axios"
import {getToken, setToken} from "@/utils/auth/token"

const baseURL = "" // 后端地址

const server = axios.create({
    baseURL: baseURL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 100000 // request timeout
})

//添加一个请求拦截器
server.interceptors.request.use(function (config) {
    config.headers['token'] = getToken();
    return config;
}, function (error) {
    //Do something with request error
    return error;
});