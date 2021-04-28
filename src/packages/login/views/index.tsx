import {defineComponent, onMounted, ref, watch} from 'vue'
import {useStore} from "@/store"

export default defineComponent({
    name: 'name',
    props: [],
    emits: [],
    setup(props, ctx) {
        const store = useStore();
        let var1 = ref(1);
        watch(var1, (n, o) => {})
        onMounted(() => {
        })

        const l = () => {
            store.commit("user/SET_TOKEN","无外乎");
        }
        
        
        return () => (
            <>
                <div class="main">
                    {store.state.user.token}
                    <el-button onClick={l}>哈哈</el-button>
                </div>
            </>
        )
    }
})