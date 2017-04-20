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
          <img v-lazy="img" />
        </li>
      </ul>
  </div>

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
            '../../../static/img/turns_1.png', 
            '../../../static/img/turns_3.png', 
            '../../../static/img/turns_1.png',
            '../../../static/img/turns_2.png',
            '../../../static/img/turns_3.png',
            '../../../static/img/turns_4.png',
            '../../../static/img/turns_1.png',
            '../../../static/img/turns_2.png',
            '../../../static/img/turns_3.png',
            '../../../static/img/turns_4.png',
            '../../../static/img/turns_1.png',
            '../../../static/img/turns_2.png',
            '../../../static/img/turns_3.png',
            '../../../static/img/turns_4.png',
            '../../../static/img/turns_1.png',
            '../../../static/img/turns_2.png',
            '../../../static/img/turns_3.png',
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
</style>