<template>
<div>
    <span class="post1" >账号:<input type="text"  v-model="ct"><br></span>
    <span class="post2" >密码:<input type="password" v-model="ps"> <br></span>
    <h2 class="post4">{{warns}}</h2>
    <button :class={post3:true,bt:true} @click="ck">登录</button>
</div>
</template>
<script>
let patt1=new RegExp('^[1][0-9]{10}$')
let patt2=new RegExp('[a-zA-Z]')
let patt3=new RegExp('[0-9]')
let num=0
let st=0
import  axios  from 'axios'
let arr
export default {
    name:'login',
    data(){
      return{
        ct:'',
        ps:'',
        warns:''
      }
    },
    methods:{
      ck(){
            if(patt1.test(this.ct)){
              if(this.ps.length>=8){
                for (const i of this.ps) {
                    if(patt2.test(i)){
                        st=st+1
                      }
                    if(patt3.test(i)){
                        num=num+1
                      }
                  
                    if((num>0)&&(st>0)){
                      axios({
                        url:' http://localhost:3000/posts',
                        method:'get',
                        params:{
                              count:this.ct,
                              pass:this.ps
                          }
                            }).then(res=>{
                                    arr=res.data
                                       if(arr.length!=0){
                                          this.$store.commit("dd0",arr[0].id)
                                          this.$store.commit("dd1",arr[0].name)
                                          this.$store.commit("dd2",arr[0].years)
                                          this.$store.commit("dd3",arr[0].mail)
                                          this.$store.commit("dd4",arr[0].phone)
                                          this.$store.commit("dd5",arr[0].count)
                                          this.$store.commit("dd6",arr[0].pass)
                                          this.$store.commit("dd7")
                                          this.$router.push('/ui')
                                                    }
                                        else{
                                            this.warns='账号或者密码错误'
                                            }
                                      }).catch(err=>{
                                            this.warns=err
                                      })
                        }
                      else if((num>0)&&(st==0)){this.warns='密码缺少字符'}
                      else if((num==0)&&(st>0)){this.warns='密码缺少数字'}
                    }
                    }
              else{
                        this.warns='密码长度要大于8'
                    }
                }
            else{
                this.warns='手机格式不正确'
                }
                num=0
                st=0
            }
}
}
</script>
<style>
body{
  background-color: aqua;
}
h1.sty{
  color: brown;
  text-align:center;
}
.post1{
  position: fixed;
  top: 50px;
  right:600px
}
.post2{
  position: fixed;
  top: 100px;
  right:600px
}
.post3{
  position: fixed;
  top: 180px;
  right:650px
}
.post4{
  position: fixed;
  top: 120px;
  right:600px;
  color:red;
}
.bt{
  background: blueviolet;
  outline:none;
  font-size: 20px;
  border-width: 0px;
  width:90px;
  height:45px;
}
.bt:hover{
  background: crimson;
}
</style>