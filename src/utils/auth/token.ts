// 用于管理用户鉴权相关
// token部分
// 可以多地登录，但是修改密码后需要重新登录
import {useStore} from "@/store"

const store = useStore();
const tokenKey = "token"

function getToken(): string {
    let token: string = "";
    if (store.state.user.token) {
        token = store.state.user.token;
    } else {
        token = localStorage.getItem(tokenKey) || "";
        store.commit("SET_TOKEN","哈哈哈")
    }
    return token
}

function setToken(token: string): void {
    localStorage.setItem(tokenKey, token);
}

export {
    getToken,
    setToken
}