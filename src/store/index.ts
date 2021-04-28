import { createStore, Store, useStore as baseUseStore } from 'vuex'
import {InjectionKey} from "vue"
import RootStateTypes, {AllStateTypes} from "@/store/interface"

// 引入子模块
import user from "@/store/modules/user"

export default createStore<RootStateTypes>({
  modules: {
    user
  }
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol("vue-store")


export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}