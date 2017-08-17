<template>
    <div id="particles-js">
        <div class="login-wrap">
          <div class="ms-title">DEMO</div>
          <div class="ms-login">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                  <el-form-item prop="username">
                      <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                      <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                  </el-form-item>
                  <div class="login-btn">
                      <el-button type="primary" @click="submitForm('ruleForm')" v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
                  </div>
                  <p id="sign_info" style="font-size:12px;line-height:30px;color:red;display:none;">用户名或密码错误,请确认信息是否正确</p>
              </el-form>
          </div>
      </div>
    </div>
</template>

<script>
    var jQuery = require('jquery');
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                fullscreenLoading: false
            }
        },
        methods: {
            submitForm: function(formName) {
                jQuery('#sign_info').hide();
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                      //显示加载动画
                      this.fullscreenLoading = true;
                      setTimeout(() => {
                        this.fullscreenLoading = false;
                        //vue resource进行异步操作
                        self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/sign_in_pass',
                          { params: { 'username':self.ruleForm.username, 'password':self.ruleForm.password} })
                          .then(function(res){
                              if(res.body.statuscode == 0){
                                localStorage.setItem('ms_username',res.body.data);
                                self.$router.push('/index');
                              }else{
                                $('#sign_info').show();
                                console.log('用户名或密码错误!!');
                                return false;
                              } 
                          },function(){
                              console.log('登陆错误!!');
                              return false;
                          });
                      }, 800);  
                      // jQuery.ajax({ 
                      //     url: "http://localhost/manageSystem/api/index.php/Platform/sign_in_pass", 
                      //     data: { username:self.ruleForm.username, password:self.ruleForm.password },
                      //     type: "GET",
                      //     dataType: 'jsonp',
                      //     //jsonp: 'JSON_CALLBACK', 
                      //     success: function(d){
                      //         if(d.statuscode==0){
                      //             localStorage.setItem('ms_username',self.ruleForm.username);
                      //             self.$router.push('/index');
                      //         }else{
                      //             $('#sign_info').show();
                      //             console.log('用户名或密码错误!!');
                      //             return false;
                      //         }
                      //     }
                      // });
                    } else {
                        console.log('提交错误!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    /* ---- base ---- */
   
    canvas{
      display:block;
      vertical-align:bottom;
    }

    /* ---- particles.js container ---- */

    #particles-js{
      width: 100%;
      height: 100%;
      background-color: #363636;
      background-image: url('../../../../static/img/1.jpg');
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    }

    .login-wrap{

    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>