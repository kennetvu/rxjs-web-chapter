const express = require("express");
const io = require('socket.io');
const app = express();
const port = 3700;
app.get("/", function(req, res){
  res.send("It works!");
});
io.listen(app.listen(port));
io.sockets.on('connection', function (socket) {
  socket.emit('message', { message: 'welcome to the chat' });
  socket.on('send', function (data) {
    io.sockets.emit('message', data);
  });
});
console.log("Listening on port " + port);
