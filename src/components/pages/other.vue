<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>基础图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            vue-echarts-v3：基于vue2和eCharts.js3的图表组件。
            访问地址：<a href="https://github.com/xlsdg/vue-echarts-v3" target="_blank">vue-echarts-v3</a>
        </div>
        <div class="echarts">
            <IEcharts :option="line" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="bar" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie" ></IEcharts>
        </div>
        <div class="echarts">
            <IEcharts :option="pie_radius" ></IEcharts>
        </div>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3';
    export default {
        components: {
            IEcharts
        },
        data: () => ({
            line: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: '曲线图'
                },
                xAxis: {
                    data: ["西湖区", "拱墅区", "萧山区", "滨江区", "江干区", "上城区", "下城区"]
                },
                yAxis:{},
                series: [
                    {
                        name: "公司地址",
                        type: "line",
                        data: [5, 20, 36, 10, 10, 20, 15]
                    }
                ]
            },
            bar: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
                title: {
                    text: '柱状图'
                },
                xAxis: {
                    data: ["2K-4K", "4K-6K", "6K-8K", "8K-10K", "10K-15K", "15K以上"]
                },
                yAxis:{},
                series: [
                    {
                        name: "薪酬",
                        type: "bar",
                        data: [5, 20, 36, 10, 14, 20]
                    }
                ]
            },
            pie: {
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                title : {
                    text: '饼状图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["1K-5K", "5K-10K", "10K-15K", "15K-20K", "20K以上"]
                },
                series : [
                    {
                        name: '薪酬',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, name:'1K-5K'},
                            {value:310, name:'5K-10K'},
                            {value:234, name:'10K-15K'},
                            {value:135, name:'15K-20K'},
                            {value:548, name:'20K以上'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            pie_radius:{
                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
                title : {
                    text: '环形图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ["1K-5K", "5K-10K", "10K-15K", "15K-20K", "20K以上"]
                },
                series : [
                    {
                        name: '薪酬',
                        type: 'pie',
                        radius : ['40%','60%'],
                        data:[
                            {value:335, name:'1K-5K'},
                            {value:310, name:'5K-10K'},
                            {value:234, name:'10K-15K'},
                            {value:135, name:'15K-20K'},
                            {value:548, name:'20K以上'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        })
    }
</script>

<style scoped>
    .echarts {
        float: left;
        width: 500px;
        height: 400px;
    }
</style>