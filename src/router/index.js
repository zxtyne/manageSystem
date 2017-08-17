import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/pages/index/Login'

Vue.use(Router)

const routes = [
    {
      	path: '/',
      	name: 'Login',
      	component: Login
    },
    {
        path: '/hello',
        name: 'Hello',
        component: Hello
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
        path: '/index',
        //使用懒加载
        component: resolve => require(['../components/common/Home.vue'], resolve),
        children:[
            {
                path: '/',
                component: resolve => require(['../components/pages/index/index.vue'], resolve)
            },
            {
                path: '/add_info',
                component: resolve => require(['../components/pages/add/add_info.vue'], resolve)
            },
            {
                path: '/add_per',
                component: resolve => require(['../components/pages/add/add_per.vue'], resolve)
            },
            {
            	path: '/person',
            	component: resolve => require(['../components/pages/manage/person.vue'], resolve)
            },
            {
                path: '/admin',
                component: resolve => require(['../components/pages/manage/admin.vue'], resolve)
            },
            {
            	path: '/people',
            	component: resolve => require(['../components/pages/info/people.vue'], resolve)
            },
            {
		    	path: '/info',
            	component: resolve => require(['../components/pages/info/info.vue'], resolve)
		    },
		    {
		    	path: '/charts',
            	component: resolve => require(['../components/pages/info/charts.vue'], resolve)
		    },
            {
                path: '/d3',
                component: resolve => require(['../components/pages/info/d3.vue'], resolve)
            },
		    {
		    	path: '/other',
            	component: resolve => require(['../components/pages/info/other.vue'], resolve)
		    },
            {
                path: '/txmusic',
                component: resolve => require(['../components/pages/multimedia/txmusic.vue'], resolve)
            },
            {
                path: '/netmusic',
                component: resolve => require(['../components/pages/multimedia/netmusic.vue'], resolve)
            },
        ]
    }
]

export default new Router({ routes });

