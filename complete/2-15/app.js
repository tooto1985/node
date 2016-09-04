var fs = require("fs");
try {
	var data = fs.readFileSync("abc.txt", "utf8");
	console.log("data:%s", data);
} catch (e) {}
console.log("end!");