const http = require('http'); //创建一个http服务器
const fs = require('fs');
const server = http.createServer(function(req,res){
	//console.log(1);
//	if(request.url=='/1'){
//		response.write({'name':'Lentaro'});
//		response.end();
//	}
	console.log(req.url);
	fs.writeFile('1.txt','Save you from anything.',function(err,data){
		if(err){
			res.write('404');
		}else{
			res.write('Jud.');
		}
		res.end();
	});
});
server.listen(80);