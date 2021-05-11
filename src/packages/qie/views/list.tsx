import { defineComponent, onMounted, ref, Ref } from 'vue'
import { useRoute } from "vue-router"
import { getTaskDetail } from "../apis"
import { ITaskDetail, ITaskData } from "../interfaces"
import { ElMessageBox } from "element-plus"
import {exportJsonToExcel} from "@/utils/excel"

export default defineComponent({
    props: [],
    emits: [],
    setup(props, ctx) {
        let route = useRoute();
        let tableData = ref([]) as Ref<ITaskDetail[]>;
        let currentPage = ref(1) as Ref<number>;
        let pageSize = ref(10) as Ref<number>;
        
        let zone1 = "";
        let zone2 = "";

        const handleSizeChange = (val: number) => {
            currentPage.value = 1;
            pageSize.value = val;
        }

        const handleCurrentChange = (val: number) => {
            currentPage.value = val;
        }

        const exportExcel = () => {
            // const excelName='人员信息表'
            // excel.export_json_to_excel(["haha","123"], [[1,2],[33,22],[33,22]], excelName)
            let header = ["分区", "房间号", "昵称", "UID", "性别", "直播间标题", "直播间公告", "关注数", "热度", "周弹幕人数", "周流水", "最后更新时间"];
            let body: any = [];
            for (let i = 0; i < tableData.value.length; i++) {
                let item = tableData.value[i];
                let temp = [];
                temp.push(zone1, item.rid, item.nn, item.uid, item.gender, item.title, item.notice, item.fans, item.hot, item.week_barrage_num, item.week_gift_price, item.update_time);
                body.push(temp);
            }
            exportJsonToExcel(`【企鹅电竞】【${zone1}】未入会主播名单`, header, body);
        }

        const onClickLiveRoom = (rid: string) => {
            window.open("https://www.douyu.com/" + rid);
        }
        
        const onClickToubang = (rid: string) => {
            window.open(`http://www.toubang.tv/anchor/1_${rid}.html`);
        }

        const onClickZaikan = (rid: string) => {
            window.open(`https://www.doseeing.com/room/${rid}`)
        }
        
        const renderTableOperation = (scope: any) => {
            return (<>
                <el-button type="warning" size="mini" onClick={() => {onClickLiveRoom(scope.row.rid)}}>去直播间</el-button>
                <el-button type="success" size="mini" onClick={() => {onClickToubang(scope.row.rid)}}>头榜数据</el-button>
                <el-button type="info" size="mini" onClick={() => {onClickZaikan(scope.row.rid)}}>在看数据</el-button>
            </>)
        }
        onMounted(() => {
            let postData: ITaskData = {
                platform: route.query.platform as string,
                zone1_id: route.query.zone1_id as string,
                zone2_id: route.query.zone2_id as string
            };
            getTaskDetail(postData).then(ret => {
                if (ret.data.error == 0) {
                    tableData.value = ret.data.data.list;
                    zone1 = ret.data.data.zone1;
                    zone2 = ret.data.data.zone2;
                } else {
                    ElMessageBox({ type: "error", title: "错误", message: ret.data.msg });
                }
            }).catch(err => {
                ElMessageBox({ type: "error", title: "错误", message: err.msg })
            })
        })

        return () => (
            <>
                <el-button style="margin-bottom:15px;" type="primary" onClick={exportExcel}>导出excel</el-button>
                <el-table data={tableData.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)} stripe style="width: 100%">
                    <el-table-column label="序号" v-slots={{
                        default: (scope: any) => scope.$index + 1 + (currentPage.value - 1) * pageSize.value
                    }} width="60" align="center"></el-table-column>
                    <el-table-column prop="rid" label="房间号" width="100" align="center"></el-table-column>
                    <el-table-column prop="nn" label="昵称" width="150" align="center"></el-table-column>
                    <el-table-column label="性别" width="60" align="center" v-slots={{
                        default: (scope: any) => scope.row.gender !== 0 ? scope.row.gender == 1 ? "男" : "女" : ""
                    }}></el-table-column>
                    <el-table-column prop="title" label="标题" align="center" width="300"></el-table-column>
                    <el-table-column sortable prop="fans" label="关注数" width="120" align="center"></el-table-column>
                    <el-table-column sortable prop="hot" label="热度" width="120" align="center"></el-table-column>
                    <el-table-column sortable prop="week_barrage_num" label="周弹幕人数" width="120" align="center"></el-table-column>
                    <el-table-column sortable prop="week_gift_price" label="周流水" width="120" align="center"></el-table-column>
                    <el-table-column sortable prop="update_time" label="最后更新时间" align="center"></el-table-column>
                    <el-table-column label="操作" min-width="150" align="center" v-slots={{
                        default: renderTableOperation
                    }}>
                    </el-table-column>
                </el-table>
                <el-pagination align='right'
                    style="margin-top:20px"
                    onSizeChange={handleSizeChange}
                    onCurrentChange={handleCurrentChange}
                    current-page={currentPage.value}
                    page-sizes={[1, 5, 10, 20]}
                    page-size={pageSize.value}
                    layout="total, sizes, prev, pager, next"
                    total={tableData.value.length}>
                </el-pagination>
            </>
        )
    }
})