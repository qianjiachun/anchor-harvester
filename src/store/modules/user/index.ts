import {Module} from "vuex"
import {IUserModule} from "@/store/modules/user/interface"
import RootStateTypes from "@/store/interface"

const user: Module<IUserModule, RootStateTypes> = {
    state: {
        id: "",
        uid: "",
        token: ""
    },
    mutations: {
    }
}

export default user