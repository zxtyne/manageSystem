import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/pages/Login'

Vue.use(Router)

const routes = [
    {
      	path: '/',
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
                component: resolve => require(['../components/pages/index.vue'], resolve)
            },
            {
                path: '/add_info',
                component: resolve => require(['../components/pages/add_info.vue'], resolve)
            },
            {
                path: '/add_per',
                component: resolve => require(['../components/pages/add_per.vue'], resolve)
            },
            {
            	path: '/person',
            	component: resolve => require(['../components/pages/person.vue'], resolve)
            },
            {
            	path: '/admin',
            	component: resolve => require(['../components/pages/admin.vue'], resolve)
            },
            {
            	path: '/people',
            	component: resolve => require(['../components/pages/people.vue'], resolve)
            },
            {
		    	path: '/info',
            	component: resolve => require(['../components/pages/info.vue'], resolve)
		    },
		    {
		    	path: '/charts',
            	component: resolve => require(['../components/pages/charts.vue'], resolve)
		    },
		    {
		    	path: '/other',
            	component: resolve => require(['../components/pages/other.vue'], resolve)
		    },
        ]
    }
]

export default new Router({ routes });

