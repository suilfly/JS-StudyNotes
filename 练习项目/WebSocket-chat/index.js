var express = require('express'),
    socket = require('socket.io');
// App的设置
var app = express(),
    server = app.listen(3000, function(){
        console.log('正在监听3000端口的请求');
    });
// 静态文件
app.use(express.static('public'));
// socket设置
var io = socket(server);
// 监听何时被连接,当前端发起连接的请求时，会监听到
io.on('connection',function(socket){
    console.log('socket连接已建立...',socket.id);
    socket.on('chat',function(data){
        // 推送信息给客户端(所有的客户端)
        io.sockets.emit('chat',data);
        console.log(data);
    });
    socket.on('typing',function(data){
        // 推送广播信息
        socket.broadcast.emit('typing',data);
        console.log(data);
    });
});
