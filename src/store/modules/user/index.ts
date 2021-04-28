import {Module} from "vuex"
import {IUserModule} from "@/store/modules/user/interface"
import RootStateTypes from "@/store/interface"

const user: Module<IUserModule, RootStateTypes> = {
    namespaced: true,
    state: {
        id: "",
        uid: "",
        token: ""
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_ID: (state, ID) => {
            state.id = ID;
        },
        SET_UID: (state, UID) => {
            state.uid = UID;
        },
    }
}

export default user