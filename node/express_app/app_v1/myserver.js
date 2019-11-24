/*
*  我的服务器 1.0 版本
* */

// 导入 path 路径
const path = require('path');
// 导入 express 框架,
const express = require('express');
// 导入的 express 是一个函数 我们调用它, 返回一个app 实例对象, 代表一个web app应用程序
const app = express();
// __dirname 表示当前 js 文件 所在的路径
// path.join 方法 将 __dirname 当前路径 和 public 字符串 连接起来表示新路径
const publicPath = path.join(__dirname, 'public');
// 通过调用 express.static 方法, 传递 publicPath 来创建一个网站静态资源 中间件
const publicMiddleware = express.static(publicPath);
// 使用 中间件
app.use(publicMiddleware);

// 定义一个端口常量
const port = 5000;
// 通过 app.listen 监听 对应的端口, 这里为5000
app.listen(port, function (err) {
    // 如果有错误我们就打印错误消息
    if (err) {
        console.error(err);
        return;
    }
    // 打印一个提示信息
    console.log(`请访问 http://localhost:${port}`);
});
