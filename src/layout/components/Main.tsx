import {defineComponent, onMounted, ref, watch} from 'vue'
import { RouterLink, RouterView } from 'vue-router';
export default defineComponent({
    name: 'AppMain',
    setup(props, ctx) {
        return () => (
            <>
                <RouterView></RouterView>
            </>
        )
    }
})