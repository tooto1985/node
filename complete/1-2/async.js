console.log("1");
setTimeout(function run() {
    console.log("4");
}.bind(console.log("2")),0);
console.log("3");
