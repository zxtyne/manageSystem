<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
		   		<el-breadcrumb-item><i class="el-icon-setting"></i> 新增 / 新增活动</el-breadcrumb-item>
			</el-breadcrumb>
			<br/>
		<div style="text-align:center">
			<el-steps :space="200" :active="1">
			  <el-step title="填写" icon="edit"></el-step>
			  <el-step title="审批" icon="upload"></el-step>
			  <el-step title="成功" icon="circle-check"></el-step>
			</el-steps>
		</div>
		</div>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="活动名称" prop="name">
		    <el-input v-model="ruleForm.name" style="width: 194px;"></el-input>
		  </el-form-item>
		  <el-form-item label="活动区域" prop="region">
		    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
		      <el-option label="区域一" value="shanghai"></el-option>
		      <el-option label="区域二" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="活动时间" required>
		    <el-col :span="6">
		      <el-form-item prop="date">       
		         <div class="block">
				    <el-date-picker
				      v-model="ruleForm.date"
				      type="datetime"
				      placeholder="选择日期时间"
				      align="right"
				      :picker-options="pickerOptions">
				    </el-date-picker>
				  </div>
		      </el-form-item>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="即时配送" prop="delivery">
		    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
		  </el-form-item>
		  <el-form-item label="活动性质" prop="type">
		    <el-checkbox-group v-model="ruleForm.type">
		      <el-checkbox label="线上活动" name="type"></el-checkbox>
		      <el-checkbox label="地推活动" name="type"></el-checkbox>
		      <el-checkbox label="线下活动" name="type"></el-checkbox>
		      <el-checkbox label="单纯曝光" name="type"></el-checkbox>
		    </el-checkbox-group>
		  </el-form-item>
		  <el-form-item label="特殊情况" prop="resource">
		    <el-radio-group v-model="ruleForm.resource">
		      <el-radio label="线上网络赞助"></el-radio>
		      <el-radio label="线下场地免费"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item label="活动形式" prop="desc">
		    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
          region: '',
          date: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
