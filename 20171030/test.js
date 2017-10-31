const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req,res){
	let urlName = req.url;
	let na = '';
	console.log(urlName);
	urlName = urlName.split('/')[1];
	if(urlName !== 'favicon.ico'){
		fs.readFile(na + urlName,function(err,data){
			console.log(urlName);
			if(err){
				res.write('404');
			}else{
				res.write(data);
			}
			res.end();
		});
	}
});
server.listen(80);
//fs.writeFile('1.txt','Save you from anything.',function(err){
//	if(err) console.log('错误');
//	console.log('Jud.');
//})
