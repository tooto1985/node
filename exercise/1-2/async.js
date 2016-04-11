console.log(1);
setTimeout(run.bind(console.log(2)));
function run() {
    console.log(3);
}
console.log(4);