console.log("step1:start");
console.log("step2:async run function");
setTimeout(function run() {
	console.log("step4:do run function");
},0); 
console.log("step3:end");
