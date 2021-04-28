// 用于管理用户鉴权相关
// token部分
// 可以多地登录，但是修改密码后需要重新登录

const tokenKey = "token"

function getToken(): string {
    let ret: string = localStorage.getItem(tokenKey) || "";
    return ret
}

function setToken(token: string): void {
    localStorage.setItem(tokenKey, token);
}

export {
    getToken,
    setToken
}