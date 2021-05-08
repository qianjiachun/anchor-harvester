import {defineComponent, onMounted, ref, watch} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import styles from "../styles/main.module.scss"
import {useRouter} from "vue-router"

export default defineComponent({
    name: 'AppMain',
    setup(props, ctx) {
        let router = useRouter();
        return () => (
            <>
                <div class={styles.breadcrumb}>{router.currentRoute.value.meta.title}</div>
                <RouterView></RouterView>
            </>
        )
    }
})