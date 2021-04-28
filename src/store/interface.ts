import {IUserModule} from "@/store/modules/user/interface"

export default interface RootStateTypes {
    test: string
}

// 引入子模块
export interface AllStateTypes extends RootStateTypes {
    user: IUserModule,
}