var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
app.use(express.static(__dirname + "/public"));
io.on("connection", function(socket) {
    socket.on("send", function(data) {
        socket.broadcast.emit("receive", data);
    });
});
server.listen(process.env.PORT || 3000);