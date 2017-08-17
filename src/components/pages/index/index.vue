<template>
	<div>
	  <div class="crumbs">
	      <el-breadcrumb separator="/">
	          <el-breadcrumb-item><i class="el-icon-setting"></i> 首页 / 基于Vue.js 2.x系列 + Element UI 的管理页面</el-breadcrumb-item>
	      </el-breadcrumb>
	  </div>
	  <el-carousel indicator-position="outside" height="370px">
	    <el-carousel-item v-for="item in items">
	      <img v-bind:src="item.pic" alt="img" title="轮播图" />
	    </el-carousel-item>
	  </el-carousel>
     <div class="img-list">
      <ul id="container">
        <li v-for="img in list">
          <img v-lazy="img" class="lazy"/>
        </li>
      </ul>
    </div>
    <h3 style="margin-bottom:20px;">E-MapReduce 功能</h3>
    <p>自动化按需创建集群</p>
    <ul style="margin:15px;font-size:16px;color:grey;">
      <li>自由选择机器配置（CPU，内存）和磁盘类型和容量</li>
      <li>自由选择服务器规模，包括 Master 和 Core 的数量</li>
      <li>根据业务量的上升可对集群动态扩容</li>
      <li>自由选择开源大数据生态软件组合和版本，目前包括 Hadoop 和 Spark</li>
      <li>自由选择启动集群的方式，分为临时集群和长时间运行集群</li>
    </ul>
    <p>支持丰富的作业类型</p>
    <ul style="margin:15px;font-size:16px;color:grey;">
      <li>MapReduce：离线处理作业</li>
      <li>Hive：关系型分析查询作业</li>
      <li>Pig：数据清洗，ETL 等脚本作业</li>
      <li>Spark MLlib：基于 Spark 的机器学习作业</li>
      <li>Spark GraphX：基于 Spark 的图处理作业</li>
      <li>Spark Streaming：基于 Spark 的在线/流式 作业</li>
      <li>Spark SQL & DataFrames：基于 Spark 的数据科学交互式作业</li>     
    </ul>
    <p>灵活的作业执行计划</p>
    <ul style="margin:15px;font-size:16px;color:grey;">
      <li>将作业（包括 Hadoop/Spark/Hive/Pig）任意组合成执行计划</li>
      <li>执行计划的执行策略有两种，分为立即执行和定时周期执行</li>
    </ul>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        
         items : [
         	{pic:'../../../static/img/turns_1.png'},
         	{pic:'../../../static/img/turns_2.png'},
         	{pic:'../../../static/img/turns_3.png'},
         	{pic:'../../../static/img/turns_4.png'}
         ],
         list: [
            // '../../../static/img/turns_1.png', 
            // '../../../static/img/turns_3.png', 
            // '../../../static/img/turns_1.png',
            // '../../../static/img/turns_2.png',
            // '../../../static/img/turns_3.png',
            // '../../../static/img/turns_4.png',
            // '../../../static/img/turns_1.png',
            // '../../../static/img/turns_2.png',
            // '../../../static/img/turns_3.png',
            // '../../../static/img/turns_4.png',
            // '../../../static/img/turns_1.png',
            // '../../../static/img/turns_2.png',
            // '../../../static/img/turns_3.png',
            // '../../../static/img/turns_4.png',
            // '../../../static/img/turns_1.png',
            // '../../../static/img/turns_2.png',
            // '../../../static/img/turns_3.png',
         ]
      };
    },
  }
</script>

<style scoped>
  img{
  	width:100%;
  	height:100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  p{
    font-weight:700;
  }
  li{
    margin-bottom:12px;
  }

</style>