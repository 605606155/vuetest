import axios from "axios";
export function request(config){
    const instance=axios.create({
        baseURL:'http://localhost:3000/posts',
        timeout:5000,
    })
    instance.interceptors.request.use(res=>{
        console.log(res);
        return res
    },err=>{
        console.log(err);
    })
}