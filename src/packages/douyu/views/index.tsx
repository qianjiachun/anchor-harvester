import { defineComponent, onMounted, ref, watch } from 'vue'
import { useStore } from "@/store"
import styles from "../styles/index.module.scss"
import {getTaskList} from "../apis"

export default defineComponent({
    name: 'name',
    props: [],
    emits: [],
    setup(props, ctx) {
        let tableData = ref([{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]); 

        onMounted(() => {
            getTaskList().then(ret => {
                if (ret.data.error == 0) {
                    tableData.value = ret.data.data;
                }
            })
        })

        return () => (
            <>
                <el-button style="margin-bottom:15px;" type="primary">新增任务</el-button>
                <el-table data={tableData.value} stripe style="width: 100%">
                    <el-table-column prop="zone1" label="分区1"></el-table-column>
                    <el-table-column prop="zone2" label="分区2"></el-table-column>
                    <el-table-column sortable prop="anchor_num" label="未入会主播数"></el-table-column>
                    <el-table-column sortable prop="update_time" label="最后更新时间"></el-table-column>
                    <el-table-column fixed="right" label="操作" min-width="160">
                        <el-button type="primary" size="mini">查看</el-button>
                        <el-button type="danger" size="mini">删除</el-button>
                    </el-table-column>
                </el-table>
            </>
        )
    }
})