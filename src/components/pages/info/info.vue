<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
		   		<el-breadcrumb-item><i class="el-icon-setting"></i> 信息 / 个人资料</el-breadcrumb-item>
			</el-breadcrumb>
			<br/>
		</div>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="姓名" prop="name">
		    <el-input v-model="ruleForm.name" placeholder="请输入姓名" style="width: 24.6%;"></el-input>
		  </el-form-item>
		  <el-form-item label="性别" prop="sex">
		    <el-radio-group v-model="ruleForm.sex">
		      <el-radio label="男"></el-radio>
		      <el-radio label="女"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item label="工种" prop="category">
		    <el-select v-model="ruleForm.category" placeholder="请选择工种">
		      <el-option label="技术性" value="skill"></el-option>
		      <el-option label="非技术性" value="unskill"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="身份证" prop="identity">
		    <el-input v-model="ruleForm.identity" placeholder="请输入身份证号" style="width: 24.6%;"></el-input>
		  </el-form-item>
		  <el-form-item label="出生日期" required>
		    <el-col :span="6">
		      <el-form-item prop="birth">       
		         <div class="block">
				    <el-date-picker
				      v-model="ruleForm.birth"
				      type="datetime"
				      placeholder="选择日期时间"
				      align="right"
				      >
				    </el-date-picker>
				  </div>
		      </el-form-item>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="是否全职" prop="delivery">
		    <el-switch on-text="是" off-text="否" v-model="ruleForm.delivery"></el-switch>
		  </el-form-item>
		  <el-form-item label="家庭地址" prop="address">
		    <el-input type="textarea" v-model="ruleForm.address"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">确定修改</el-button>
		    <el-button @click="resetForm('ruleForm')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        ruleForm: {
          name: '',
          category: '',
          birth: '',
          delivery: false,
          identity:'',
          sex: '',
          address: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          category: [
            { required: true, message: '请选择工种', trigger: 'change' }
          ],
          birth: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          identity: [
          	{ required: true, message: '请输入身份证号', trigger: 'blur' },
            { min: 18, max: 18, message: '请输入正确的身份证号', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          address: [
            { required: true, message: '请填写家庭地址', trigger: 'blur' }
          ]
        },
      };
    },	  
    mounted: function() {
                var self = this;
                self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/item_info',
                          { params: { 'user':localStorage.getItem('ms_username') } })
                          .then(function(res){
                              if(res.body.statuscode == 0){
                              	self.ruleForm.name = res.body.data.name;
                              	self.ruleForm.sex = res.body.data.sex;
                              	self.ruleForm.category = res.body.data.category;
                              	self.ruleForm.identity = res.body.data.identity;
                              	self.ruleForm.birth = new Date(Date.parse(res.body.data.birth.replace(/-/g, "/"))); 
                              	self.ruleForm.delivery = Boolean(Number(res.body.data.delivery));
                              	self.ruleForm.address = res.body.data.address;
                                console.log(res.body.data);
                              }else{
                                console.log('用户名错误!!');
                                return false;
                              } 
                          },function(){
                              console.log('error!!');
                              return false;
                          });
            },
    methods: {
      submitForm: function(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('确定修改？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '修改中...';
                setTimeout(() => {
                  done();
                  setTimeout(() => {
                    instance.confirmButtonLoading = false;
                  }, 300);
                }, 1000);
              } else {
                done();
              }
              }
          }).then(() => {
            this.$message({
              type: 'success',
              message: '修改成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消修改'
            });          
          });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm: function(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>
