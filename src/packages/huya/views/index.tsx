import {defineComponent, onMounted, ref, watch} from 'vue'
import {useStore} from "@/store"
import styles from "../styles/index.module.scss"

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
        return () => (
            <>
                <div class={styles.wrap}>
                    <el-card style="width:350px;" header="主播收割器">
                        
                    </el-card>
                </div>
            </>
        )
    }
})