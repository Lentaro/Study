const express = require('express');//引入express框架
const app = express();//开启服务
app.use(express.static('www'));//中间件 static 进行静态资源托管
app.get('/user',(req,res)=>{
	let sql = {};
}).listen(80);
