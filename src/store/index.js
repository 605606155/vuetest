import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const store=new Vuex.Store({
    plugins:[createPersistedState({
        storage: window.sessionStorage
       })],
    state:{
        uid:0,
        uaccount:'',
        upassword:'',
        uname:'',
        uage:'',
        uphone:'',
        umail:'',
        ukey:false
    },
    mutations:{
        dd0(state,ad){
            state.uid=ad
        },
        dd1(state,ad){
            state.uname=ad   
        },
        dd2(state,ad){
            state.uage=ad    
        },
        dd3(state,ad){
            state.umail=ad
        },
        dd4(state,ad){
            state.uphone=ad
        },
        dd5(state,ad){
            state.uaccount=ad
        },
        dd6(state,ad){
            state.upassword=ad
        },
        dd7(state){
            state.ukey=true
        },
        dd8(state){
            state.ukey=false
        }
    },
    actions:{
    },
    getters:{
    },
    modules:{    
    }

})
export default store
