// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload';
import jQuery from 'jquery';
import axios from 'axios';
import 'element-ui/lib/theme-default/index.css';    // 默认主题

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: '../static/img/load.gif',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend'] 
  listenEvents: [ 'scroll' ]
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app');
