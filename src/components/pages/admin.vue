<template>
<div>            
  <div class="login-btn">
    	<el-input v-model="keyword" placeholder="请输入关键字" style="width:40%"></el-input>     
        <el-button type="primary" @click="search()" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
  </div><br/><br/>
  <el-row :gutter="24">
    <el-col :xs="18" :sm="16" :md="12" :lg="12"   v-for="item in list">
    	<div>
    	  <el-row>
	    	<el-button style="width:95%;height:92px;padding:0px;"  @click="play(item)">
			  <el-col :span="7" style="width:90px;height:90px" >
			  	<img v-bind:src="item.albumpic_small" alt="图片不见了" title="封面" class="cover"/>
			  </el-col>
			  <el-col :span="14" style="text-align:center;font-size:14px" >
	    	 	<p>歌曲名:{{item.songname}}</p>
	    	 	<p>歌手:{{item.singername}}</p>
	    	 	<p>专辑名:{{item.albumname}}</p>
			  </el-col>
	    	 </el-button>
		  </el-row>
    	</div>
    </el-col>
  </el-row>
  <el-card class="box-card">
  <div slot="header" class="clearfix" style="margin:-5px">
    <span style="line-height: 16px;">正在播放：{{ songname }}</span>
  </div>
    <div class="text item"  style="margin:-15px">
        <div style="display:inline"><img v-bind:src="pic" alt="" title="封面" style="width:33px;height:33px;padding:0px;"/></div>
      	<audio v-bind:src="link" controls="controls"  preload="none" style="width:90%;">
			您的浏览器不支持在线播放
	</audio>
  </div>

</el-card>
 </div>
</template>

<script>
    export default {
        data: function(){
            return {
            	keyword: '',
            	list: [
		          ],
		          songname:'',
		          link:'',
              pic:'../../../static/img/load.gif',
              fullscreenLoading: false
            }
        },    
        mounted: function() {
          this.songname = '暂无';
	      },
        on: {
        keyup: function (event) {
          // 如果按下去的不是enter键或者
          // 没有同时按下shift键
          // 则返回
          if (event.keyCode == 13){
            console.log("触发了");
          }
          // 阻止 事件冒泡
          event.stopPropagation()
          // 阻止该元素默认的keyup事件
          event.preventDefault()
          // ...
        },
      },
        methods: {
            searchenter: function(event) {
                event = event || window.event;
                if (event.keyCode == 13) { //判断按键值是不是回车。         
                    this.search();
                }
            },
            search: function() {
            	if(this.keyword == '' )
            		return false;
            	this.fullscreenLoading = true;
                const self = this;
                setTimeout(() => {
                this.fullscreenLoading = false;
                //vue resource进行异步操作
                self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/music_API',
                  { params: { 'keyword':self.keyword} })
                  .then(function(res){
                      if(res.body.statuscode == 0){
                      	self.list = JSON.parse(res.body.data).showapi_res_body.pagebean.contentlist;
                      }else{
                        $('#sign_info').show();
                        console.log('出现未知的错误!!');
                        return false;
                      } 
                  },function(){
                      console.log('error!!');
                      return false;
                  });
              }, 800); 
            },
            play:function(param){
            	this.songname = param.songname;
            	this.link = param.m4a;
              this.pic = param.albumpic_small;
            }
        }
    }
</script>

<style scoped>
  p{
  	margin-top:12px;
  	margin-left:5px;
  	display:block;
  	white-space:nowrap; 
  	overflow:hidden; 
  	text-overflow:ellipsis;
  }
  .music{
  	position:fixed;
  	bottom:0px;
  	width:70%;
  }
  .cover{
  	border-radius: 2px;
  }
  .el-row {
  	margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 0px;
    height: 30px;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
  	position:fixed;
  	bottom:0px;
    width: 69%;
  }



</style>