var argv = process.argv.slice(2);
console.log(argv.map(function(a) {
    return process.env[a];
}));