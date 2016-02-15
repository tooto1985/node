var mymodule = require("./MyModule");
var a = new mymodule();
console.log(a.version);
a.setName("Mark");
console.log(a.getName());
var b = new mymodule();
b.setName("John");
console.log(b.getName());