import { defineComponent, onMounted, ref, Ref } from 'vue'
import { getTaskList, addTask, deleteTask, getZone } from "../apis"
import { ITask, IZone } from "../interfaces"
import { ElMessageBox } from "element-plus"
import { useRouter } from "vue-router"

export default defineComponent({
    props: [],
    emits: [],
    setup(props, ctx) {
        let router = useRouter();
        let tableData = ref([]) as Ref<ITask[]>;
        let isDialogShow = ref(false) as Ref<Boolean>;
        let selectZone1 = ref() as Ref<string>;
        let selectZone2 = ref() as Ref<string>;
        let zone1Data = ref([]) as Ref<IZone[]>;
        let zone2Data = ref([]) as Ref<IZone[]>;

        const updateTableData = () => {
            getTaskList().then(ret => {
                if (ret.data.error == 0) {
                    tableData.value = ret.data.data;
                } else {
                    ElMessageBox({ type: "error", title: "错误", message: ret.data.msg })
                }
            }).catch(err => {
                ElMessageBox({ type: "error", title: "错误", message: err.msg })
            })
        }

        const onClickAddTask = () => {
            getZone().then(ret => {
                if (ret.data.error == 0) {
                    zone1Data.value = ret.data.data.zone1;
                    zone2Data.value = ret.data.data.zone2;
                }
                isDialogShow.value = true;
            }).catch(err => {
                ElMessageBox({ type: "error", title: "错误", message: err.msg })
            })
        }

        const onClickTaskDetail = (scope: any) => {
            router.push({ path: "/qie/list", query: { platform: "企鹅电竞", zone1_id: scope.row.zone1_id, zone2_id: scope.row.zone2_id } });
        }

        const onClickConfirmAddTask = () => {
            let platfrom = "企鹅电竞";
            if (!selectZone1.value) {
                ElMessageBox({ type: "warning", title: "提示", message: "请选择分区" });
                return;
            }
            addTask({ platform: platfrom, zone1_id: selectZone1.value, zone2_id: selectZone2.value }).then(ret => {
                if (ret.data.error == 0) {
                    ElMessageBox({ type: "success", title: "成功", message: "新增任务成功！" });
                    updateTableData();
                } else {
                    ElMessageBox({ type: "error", title: "错误", message: ret.data.msg })
                }
                isDialogShow.value = false;
            }).catch(err => {
                ElMessageBox({ type: "error", title: "错误", message: err.msg })
            })
        }

        const onClickDeleteTask = (zone1_id: string, zone2_id: string) => {
            let platform = "企鹅电竞";
            ElMessageBox.confirm("确定删除？", "提示", { type: "warning" }).then(() => {
                deleteTask({ platform: platform, zone1_id: zone1_id, zone2_id: zone2_id }).then(ret => {
                    if (ret.data.error == 0) {
                        ElMessageBox({ type: "success", title: "成功", message: "删除任务成功！" });
                        updateTableData();
                    } else {
                        ElMessageBox({ type: "error", title: "错误", message: ret.data.msg })
                    }
                }).catch(err => {
                    ElMessageBox({ type: "error", title: "错误", message: err.msg })
                })
            }).catch(() => { })
        }


        const renderTableOperation = (scope: any) => {
            return (<>
                <el-button type="primary" size="mini" onClick={() => onClickTaskDetail(scope)}>查看</el-button>
                <el-button type="danger" size="mini" onClick={() => onClickDeleteTask(scope.row.zone1_id, scope.row.zone2_id)}>删除</el-button>
            </>)
        }

        const renderDialogFooter = () => {
            return (<>
                <el-button onClick={() => isDialogShow.value = false}>取 消</el-button>
                <el-button type="primary" onClick={() => { onClickConfirmAddTask() }}>确 定</el-button>
            </>)
        }

        onMounted(() => {
            updateTableData();
        })

        return () => (
            <>
                <el-button style="margin-bottom:15px;" type="primary" onClick={onClickAddTask}>新增任务</el-button>
                <el-table data={tableData.value} stripe style="width: 100%">
                    <el-table-column label="序号" v-slots={{
                        default: (scope: any) => scope.$index + 1
                    }} width="60" align="center"></el-table-column>
                    <el-table-column prop="zone1" label="分区" align="center"></el-table-column>
                    {/* <el-table-column prop="zone2" label="分区2" align="center"></el-table-column> */}
                    <el-table-column sortable prop="anchor_num" label="未入会主播数" align="center"></el-table-column>
                    <el-table-column sortable prop="update_time" label="最后更新时间" align="center"></el-table-column>
                    <el-table-column label="操作" min-width="150" align="center" v-slots={{
                        default: renderTableOperation
                    }}>
                    </el-table-column>
                </el-table>
                <el-dialog title="新增任务" v-model={isDialogShow.value} width="300px" v-slots={{
                    footer: renderDialogFooter
                }}>
                    <el-select filterable v-model={selectZone1.value} placeholder="请选择分区">
                        {zone1Data.value.map((item: any) => <el-option key={item.id} label={item.name} value={item.id}></el-option>)}
                    </el-select>
                </el-dialog>
            </>
        )
    }
})