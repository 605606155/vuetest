import Vue from 'vue'
import Router from 'vue-router'
import ui from '../components/ui.vue'
import login from '../components/login.vue'
import store from '../store'
Vue.use(Router)
const rou= new Router({
    mode:'history',
    routes:[
        {
            path:'',
            redirect:'/login'
        },
        {
            path:'/ui',
            component:ui,
            meta:{
                requireAuth:true
            }
        },
        {
            path:'/login',
            component:login
        },
    ],
   
    
}) 
rou.beforeEach((to,from,next)=>{

    if (to.meta.requireAuth) {
        if (store.state.ukey) {
            next();
        }
        else {
            next({
                path: '/login',
            })
        }
    }
    else {
        next();
    }
})
export default rou
