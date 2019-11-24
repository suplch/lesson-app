const http = require('http');
const fs = require('fs');
const path = require('path');

// 网站静态文件夹
const staticRoot = path.join(__dirname, 'public');

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
};

// 创建一个http web 服务器, 提供一个回调函数进行服务的接收, 和响应处理
const server = http.createServer(function (req, res) {

    console.log(staticRoot + req.url);

    // 如果这个路径所对应的文件存在
    if (fs.existsSync(staticRoot + req.url)) {

        const mimetype = MIME[path.extname(staticRoot + req.url)];

        res.writeHead(200, {
            'Content-Type': mimetype,
        });
        // 读取对应的文件
        fs.readFile(staticRoot + req.url, function (err, data) {
            // 将读取到的文件内容响应给浏览器
            res.end(data);
        });
    } else {
        // 设置状态码 200 表示成功
        // 设置响应内容类型, 为普通文本字符串, 编码格式为 utf-8
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        });
        // 将一段文本响应给浏览器
        res.end('<h1>😯 网页未找到 😲</h1>');
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
