<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="index">
                <i class="el-icon-menu"></i>首页
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu el-icon-plus"></i>新增</template>
                <el-menu-item index="add_info">新增活动</el-menu-item>
                <el-menu-item index="add_per">新增人员</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-date"></i>查看</template>
                <el-menu-item index="charts">图表信息</el-menu-item>
                <el-menu-item index="people">人员信息</el-menu-item>
                <el-menu-item index="d3">活动信息</el-menu-item>
                <el-menu-item index="other">其他</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-setting"></i>管理</template>
                <el-menu-item index="person">普通员工</el-menu-item>
                <el-menu-item index="admin">管理员</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title"><i class="el-icon-star-on"></i>音乐</template>
                <el-menu-item index="txmusic">音乐播放</el-menu-item>
                <el-menu-item index="netmusic">视屏播放</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
