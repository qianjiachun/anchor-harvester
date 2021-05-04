import {defineComponent, onMounted, ref, watch} from 'vue'
import styles from "../styles/header.module.scss"

export default defineComponent({
    name: 'name',
    props: [],
    emits: [],
    setup(props, ctx) {
        return () => (
            <>
                <div class={styles.header}>
                    <div>主播收割器</div>
                </div>
            </>
        )
    }
})