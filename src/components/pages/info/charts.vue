<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>混合图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            vue-echarts-v3：基于vue2和eCharts.js3的图表组件。
        </div>
        <div class="mix-echarts">
            <IEcharts :option="mix" ></IEcharts>
        </div>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3';
    export default {
        data: function(){
            return {
                mix:{
                    color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                    legend: {
                        data:["平均薪酬", "西湖区", "拱墅区", "萧山区", "滨江区", "江干区", "上城区", "下城区"]
                    },
                    xAxis: {
                        data: ["1K-5K", "5K-10K", "10K-15K", "15K-20K", "20K-25K", "25K以上"]
                    },
                    yAxis:{},
                    series: [
                        {
                            name: "平均薪酬",
                            type: "line",
                            data: [26, 40, 35, 41, 50, 27]
                        },
                        {
                            name: "西湖区",
                            type: "bar",
                            data: [15, 20, 26, 30, 40, 27]
                        },
                        {
                            name: "拱墅区",
                            type: "bar",
                            data: [5, 30, 36, 10, 34, 20]
                        },
                        {
                            name: "萧山区",
                            type: "bar",
                            data: [35, 40, 30, 50, 77, 40]
                        },
                        {
                            name: "滨江区",
                            type: "bar",
                            data: [12, 56, 30, 44, 67, 44]
                        },
                        {
                            name: "江干区",
                            type: "bar",
                            data: [22, 30, 33, 12, 62, 21]
                        },
                        {
                            name: "上城区",
                            type: "bar",
                            data: [24, 29, 33, 22, 14, 34]
                        },
                        {
                            name: "下城区",
                            type: "bar",
                            data: [9, 24, 36, 31, 55, 41]
                        }
                    ]
                }
            }
        },
        components: {
            IEcharts
        }
    }
</script>

<style scoped>
    .mix-echarts{
        margin:0px 0px 0px -70px;
        width:1000px;
        height:600px;
    }
</style>