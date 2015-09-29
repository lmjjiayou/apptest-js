console.log('b starting');
exports.done=false;
var a = require('./a.js');
console.log('in b, a.done=%j',a.done);
exports.done=true;
console.log('b done');
<<<<<<< HEAD
console.log('b.js is done');
=======
console.log('b done');
>>>>>>> f1412f49ee82dd8305a4e27958e6e3d70b547e8b
