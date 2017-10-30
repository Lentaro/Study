const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
	let urlName = req.url;
	let files = '';//有路径改这个
	let obj = {
		code:0
	}
	if(urlName !== 'favicon.ico'){
		//静态文件
		if(urlName.indexOf('?'!=-1)){
			//有问号走接口
			console.log(urlName);
			urlName = urlName.slice(0,);
			let arr = urlName.split('&');
			arr.forEach((e,i)=>{
				let a = e.split('=');
				if(a[1] == 'Lentaro'){
					obj.code = 1;
					obj.msg = '已被注册';
				}else {
					obj.msg = '允许注册';
				}
			})
		}else{
			//没问号走文件
			urlName = urlName.split('/')[1];
			fs.readFile(files+urlName,(err,data)=>{
				if(err){
					res.write('404');
				}else{
					res.write(data);
				}
				res.end;
			})
		}
	}
}).listen(80);
