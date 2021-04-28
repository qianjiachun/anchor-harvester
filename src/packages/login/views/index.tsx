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
        return () => (
            <>
                <div class="main">
                    {store.state.user.id}
                </div>
            </>
        )
    }
})