import {defineComponent, onMounted, ref, watch} from 'vue'
import Main from "./components/Main"
import Aside from "./components/Aside"
import Header from "./components/Header"


export default defineComponent({
    name: 'Layout',
    components: {Main, Aside, Header},
    props: [],
    emits: [],
    setup(props, ctx) {
        return () => (
            <>
                <el-container style="height: 100vh;">
                    <el-header style="background:#1d1e23">
                        <Header></Header>
                    </el-header>
                    <el-container>
                        <el-aside width="auto">
                            <Aside></Aside>
                        </el-aside>
                        <el-main>
                            <Main></Main>
                        </el-main>
                    </el-container>
                </el-container>
            </>
        )
    }
})