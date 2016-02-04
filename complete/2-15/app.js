var fs = require("fs");
var data = fs.readFileSync("abc.txt","utf8");
console.log("data:%s",data);
console.log("end!");