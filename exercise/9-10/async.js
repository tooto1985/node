var async = require("async");
var i = 0;
async.waterfall([
    function(next) {
        setTimeout(function() {
            console.log("step1=>start...");
            next(null, i + 1);
        }, 3000);
    },
    function(i, next) {
        setTimeout(function() {
            console.log("step2=>run...");
            next(null, i + 10);
        }, 3000);
    },
    function(i, next) {
        setTimeout(function() {
            console.log("step3=>run...");
            next(null, i + 100);
        }, 3000);
    }
], function(err, result) {
    if (!err) {
        console.log("result=>" + result);
    } else {
        console.log("err=>" + err);
    }
});
