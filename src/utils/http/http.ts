import axios from "axios"
import {getToken, setToken} from "@/utils/auth/token"
import {useStore} from "@/store"
import {IUserModule} from "@/store/modules/user/interface"

const store = useStore<IUserModule>();

const baseURL = "" // 后端地址

const server = axios.create({
    baseURL: baseURL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 100000 // request timeout
})

//添加一个请求拦截器
server.interceptors.request.use(function (config) {
    // if (store.state.user.id) {
    //     store.state.id
        
    // }
    config.headers['Content-Type'] = 'application/json, text/plain';
    return config;
}, function (error) {
    //Do something with request error
    return error;
});