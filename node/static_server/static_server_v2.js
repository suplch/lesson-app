const http = require('http');
const fs = require('fs');

// 创建一个http web 服务器, 提供一个回调函数进行服务的接收, 和响应处理
const server = http.createServer(function (req, res) {

    console.log(req.url);

    if (req.url === '/index.html') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        });

        fs.readFile('./public/index.html', function (err, data) {
            res.end(data);
        });

    } else if (req.url === '/lry.jpg') {
        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
        });

        fs.readFile('./public/lry.jpg', function (err, data) {
            res.end(data);
        });
    } else {
        // 设置状态码 200 表示成功
        // 设置响应内容类型, 为普通文本字符串, 编码格式为 utf-8
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8',
        });
        // 将一段文本响应给浏览器
        res.end('hello world, 世界你好!!!');
    }


});

const port = 5000;
// 监听 5000 端口号
server.listen(port, function (err) {
    // 如果有错误, 那么打印错误
    if (err) {
        return console.error(err);
    }
    console.log(`服务器已经启动, 请访问 http://localhost:${port}`);
});
