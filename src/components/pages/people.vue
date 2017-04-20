<template>
  <div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="job_address" label="地址" sortable width="120">
            </el-table-column>
            <el-table-column prop="job_company" label="公司名称" width="140">
            </el-table-column>
            <el-table-column prop="job_money" label="薪酬" sortable width="120">
            </el-table-column>
            <el-table-column prop="job_name" label="详细信息" :foramtter="formatter" >
            </el-table-column>
            <el-table-column prop="job_time" label="日期" sortable width="120" >
            </el-table-column>
        </el-table>
      </div><br/>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="385"  
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
    mounted: function() {
          this.$http.get('../../../static/data/data.json')
                    .then(function(res){
                        this.tableData = (res.body.data);
                    },function(){
                        console.log('error!!');
                        return false;
                    });
    },
    methods: {
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            }
        }
  }
</script>