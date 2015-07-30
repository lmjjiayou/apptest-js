var fs=require('fs');
var time=process.hrtime();
var data=fs.readFileSync('./app.js');
var diff=process.hrtime(time);
console.log('读文件操作耗费%d那秒。',diff[0]*1e9+diff[1]);
process.on('exit',function(){
	console.log('NODE.js进程被退出');
});
process.on('uncaughtException',function  (err) {
	console.log('捕捉到一个未被处理的错误：'+err);
	// body...
});
noneexistentFunc();
process.exit();
