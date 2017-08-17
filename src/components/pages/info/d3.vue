<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="活动名称"
      width="150">
      <template scope="scope">
        <el-icon name="information"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="活动区域"
      width="140">
      <template scope="scope">
        <el-checkbox checked="true">{{ scope.row.region }}</el-checkbox>
      </template>
    </el-table-column>

    <el-table-column
      label="即时配送"
      width="140">
      <template scope="scope">
          <el-switch
            v-model="scope.row.value"
            on-color="#13ce66"
            off-color="#ff4949"
            on-value="100"
            off-value="0">
          </el-switch>
      </template>
    </el-table-column>

    <el-table-column
      label="活动时间"
      width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="详情"
      width="120">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>活动性质: {{ scope.row.type }}</p>
          <p>特殊情况: {{ scope.row.resource }}</p>
          <p>活动形式: {{ scope.row.descs }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column label="操作" width="140">
      <template scope="scope">
        <el-button
          size="middle"
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
        :total="3"  
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
        self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/activity_info',
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
                    self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/activity_delete',
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
            self.$router.push('charts')
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