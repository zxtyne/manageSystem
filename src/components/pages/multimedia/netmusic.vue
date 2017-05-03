<template>
<div>            
  <div class="login-btn">
    	<el-input v-model="keyword" placeholder="请输入关键字" style="width:400px"></el-input>     
      <el-button type="primary" @click="search()" v-loading.fullscreen.lock="fullscreenLoading">搜索</el-button>
  </div><br/><br/>
  
  <video controls="controls" preload="preload" v-bind:src="link" width="700px">
    Your browser does not support the video tag.
  </video>
 </div>
</template>

<script>
    export default {
        data: function(){
            return {
            	keyword: '',
		          link:'',
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
                self.$http.jsonp('http://localhost/manageSystem/api/index.php/Platform/net_Music',
                  { params: { 'keyword':self.keyword} })
                  .then(function(res){
                      if(res.body.statuscode == 0){
                        var data=JSON.parse(res.body.data);
                      	self.link = data.durl[0].url;
                      }else{
                        console.log('出现未知的错误!!');
                        return false;
                      } 
                  },function(){
                      console.log('error!!');
                      return false;
                  });
              }, 800); 
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