import {defineComponent, onMounted, ref, watch} from 'vue'

export default defineComponent({
    name: 'name',
    props: [],
    emits: [],
    setup(props, ctx) {
        let var1 = ref(1);
        watch(var1, (n, o) => {})
        onMounted(() => {})
        return () => (
            <>
                <el-button>打火机块</el-button>
            </>
        )
    }
})