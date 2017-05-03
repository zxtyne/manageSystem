<template>
	<div>
		<div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 新增 / 新增人员</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 50%">
		  <el-form-item label="用户名" prop="name">
		    <el-input type="text" v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="pass">
		    <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="确认密码" prop="checkPass">
		    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="年龄" prop="age">
		    <el-input v-model.number="ruleForm.age"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
		    <el-button @click="resetForm('ruleForm')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 10);
      };
      var validatePass = (rule, value, callback) => {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
      };
      var validatePass2 = (rule, value, callback) => {
		if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          name: [
          	{ required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
          ],
          pass: [
          	{ required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' },
            { min: 6, message: '长度至少为 6 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' },
            { min: 6, message: '长度至少为 6 个字符', trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        const self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/new_user', {
                          params: {
                            'username': self.ruleForm.name,
                            'password': self.ruleForm.pass
                          }
                        })
                        .then( 
                          (res) => { 
                            if(res.status == 200 && res.body.statuscode == 0){
                              self.$message({
                                message: '新增成功',
                                type: 'success'
                              });
                              self.$router.push('index')
                            }else{
                              self.$message.error('新增失败');
                            }
                        }).catch(
                          (error) => { console.log(error) });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>