if (process.env[process.argv[2]]) {
	console.log(process.env[process.argv[2]]);
} else {
	console.log("沒有這個環境變數喔");
}