import { defineComponent, onMounted, ref, watch, Ref } from 'vue'
import "../styles/aside.scss"
import router from "@/router"

export default defineComponent({
    name: 'NavBar',
    props: [],
    emits: [],
    setup(props, ctx) {
        let isCollapse = ref(false) as Ref<Boolean>;
        let screenWidth = ref(0) as Ref<Number>;

        const onclickMenuSelect = (index: string) => {
            switch (index) {
                case "斗鱼":
                    console.log("哈哈")
                    router.push("/douyu");
                    break;
                case "虎牙":
                    router.push("/huya");
                    break;
                case "企鹅电竞":
                    router.push("/qie");
                    break;
                default:
                    router.push("/douyu");
                    break;
            }
        }

        onMounted(() => {
            screenWidth.value = document.body.clientWidth;
            window.addEventListener("resize", () => {
                screenWidth.value = document.body.clientWidth;
            })
        })

        watch(screenWidth, (n, o) => {
            if (n < 992) {
                isCollapse.value = true;
            } else {
                isCollapse.value = false;
            }
        })

        return () => (
            <>
                <el-menu background-color="#1d1e23" text-color="hsla(0,0%,100%,.7)" active-text-color="#fff" default-active="斗鱼" class="el-menu-vertical-demo" onSelect={onclickMenuSelect} collapse={isCollapse.value}>
                    <el-menu-item index="斗鱼" v-slots={{
                        "title": () => "斗鱼"
                    }}>
                        <i class="el-icon-menu"></i>
                    </el-menu-item>
                    <el-menu-item index="虎牙" v-slots={{
                        "title": () => "虎牙"
                    }}>
                        <i class="el-icon-menu"></i>
                    </el-menu-item>
                    <el-menu-item index="企鹅电竞" v-slots={{
                        "title": () => "企鹅电竞"
                    }}>
                        <i class="el-icon-document"></i>
                    </el-menu-item>
                </el-menu>
            </>
        )
    }
})