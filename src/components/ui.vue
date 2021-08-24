<template>
  <div>
      <h2>用户界面</h2>
      <div><strong>用户姓名:</strong><input type="text" v-model="cname"></div>
      <div><strong>用户年龄:</strong><input type="text" v-model="cyear"></div>
      <div><strong>用户邮件:</strong><input type="text" v-model="cmail"></div>
      <div><strong>用户电话:</strong><input type="text" v-model="cphone"></div>
      <button @click="change" class="bt">修改</button>
      <button class="bt" @click="logout">注销</button>
  </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'ui',
    data(){
      return{
      cid:this.$store.state.uid,
      cname:this.$store.state.uname,
      cyear:this.$store.state.uage,
      cmail:this.$store.state.umail,
      cphone:this.$store.state.uphone,
      ccount:this.$store.state.uaccount,
      cpass:this.$store.state.upassword
      }
    },
    methods:{
      change(){
        this.$store.commit("dd1",this.cname)
        this.$store.commit("dd2",this.cyear)
        this.$store.commit("dd3",this.cmail)
        this.$store.commit("dd4",this.cphone)
        axios({
          url:'http://localhost:3000/posts/'+this.$store.state.uid,
          method:'put',
          data:{
            name:this.$store.state.uname,
            years:this.$store.state.uage,
            mail:this.$store.state.umail,
            phone:this.$store.state.uphone,
            count:this.$store.state.uaccount,
            pass:this.$store.state.upassword
          }
        }).then(res=>{
          console.log(res.data);
        })
      },
      logout(){
        this.$store.commit("dd0",0)
        this.$store.commit("dd1","")
        this.$store.commit("dd2","")
        this.$store.commit("dd3","")
        this.$store.commit("dd4","")
        this.$store.commit("dd5","")
        this.$store.commit("dd6","")
        this.$store.commit("dd8")
        this.$router.push('/login')
      }
    }
    
}
</script>
<style>
body{
  background-color: aqua;
}
.bt{
  background: blueviolet;
  outline:none;
  font-size: 20px;
  border-width: 0px;
}
.bt:hover{
  background: crimson;
}
</style>