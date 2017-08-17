<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="最后登录日期"
      width="200">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用户名"
      width="150">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <p>身份证: {{ scope.row.identity }}</p>
          <p>出生日期: {{ scope.row.birth }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      width="120">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.sex }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="家庭地址"
      width="200">
      <template scope="scope">
        <el-icon name="star-on"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row, scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="4"  
        style="float:right">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: ''
      }
    },
    mounted: function getData() {
        let self = this;
        self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/admin_info',
                  { params: { 'user':localStorage.getItem('ms_username') } })
                  .then(function(res){
                      if(res.body.statuscode == 0){
                        //self.ruleForm.name = res.body.data.name;
                        this.tableData = res.body.data
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
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row, id) {
            let self = this;
            this.$confirm('确定删除', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                instance.confirmButtonLoading = true;
                instance.confirmButtonText = '删除中...';
                setTimeout(() => {
                  done();
                  setTimeout(() => {
                    instance.confirmButtonLoading = false;
                    self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/admin_delete',
                      { params: { 'id':id } })
                      .then(function(res){
                          if(res.body.statuscode == 0){
                            //self.ruleForm.name = res.body.data.name;
                            this.tableData = res.body.data
                            console.log(res.body.data);
                          }else{
                            console.log('用户名错误!!');
                            return false;
                          } 
                      },function(){
                          console.log('error!!');
                          return false;
                      });
                  }, 300);
                }, 1000);
              } else {
                done();
              }
            }
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            self.$router.push('person')
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
      }
    }
  }
</script>