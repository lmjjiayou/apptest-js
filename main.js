/*var counter1=require('./counter');
var counter2=require('./counter');

console.log(counter1.cnt());
console.log(counter2.cnt());
console.log(counter2.cnt());*/
//////
//////
//////main a b
console.log('main starting');
var a = require('./a.js');
var b = require('./b.js');
console.log('in main,a.done=%j,b.done=%j',a.done,b.done);
