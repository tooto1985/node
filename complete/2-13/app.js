var MyModule = require("./MyModule");
var a = new MyModule();
console.log(a.version);
a.setName("Mark");
console.log(a.getName());
var b = new MyModule();
b.setName("John");
console.log(b.getName());