<template>
    <div class="header">
        <div class="logo">多功能信息管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/head.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="info" v-loading.fullscreen.lock="fullscreenLoading">个人资料</el-dropdown-item>
                    <el-dropdown-item command="QRcode">二维码</el-dropdown-item>
                    <el-dropdown-item command="loginout" v-loading.fullscreen.lock="fullscreenLoading">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'username',
                fullscreenLoading: false
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                const self = this;
                if(command == 'loginout'){
                    //加载退出动画
                    this.fullscreenLoading = true;
                    setTimeout(() => {
                        this.fullscreenLoading = false;
                        localStorage.removeItem('ms_username')
                        this.$router.push('/login');            
                    }, 800);
                }else if(command == 'info'){
                    //加载动画
                    this.fullscreenLoading = true;
                    setTimeout(() => {
                        this.fullscreenLoading = false;
                        this.$router.push('/info');            
                    }, 800);
                }else if(command == 'QRcode'){
                    self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/QRcode',
                          { params: { 'username': 'username'} })
                          .then(function(res){
                            
                          },function(){
                              console.log('显示错误!!');
                              return false;
                          });
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
