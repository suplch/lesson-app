/*
*  我的服务器 4.0 版本
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

// 注册一个 路径 叫做 /info, 当浏览器发起请求,
// 当访问 /info 路径的时候 app.get 方法第二个参数表示的回调函数将会被调用
// 回调函数有两个形参, 一个是req 表示浏览器对服务器的请求, 一个是res 表示 服务器对浏览器的响应
app.get('/info', function (req, res) {
    // 定义一个 json 对象 数据;
    let data = { msg: '你好客官' };
    // 通过 res 响应对象的 send 方法可以把后端的数据 响应给前端浏览器
    res.send(data);
});

// 通过调用 express.Router方法创建一个路由中间件
const auth = express.Router();

// 可以再路由中间件上再次注册 一个路径 叫做 /login
auth.get('/login', function (req, res) {
    res.send({
        msg: '登录成功'
    })
});



/*
*  通过app 的 use 方法 使用 路由中间件,
*  第一个参数为中间件匹配执行条件, 表示当浏览器 访问 /auth 的时候才匹配
*  最终结果
*  ---------------------------------------------------------------------
*  |  当用户访问的路径是 /auth/login 的时候, 开头的 /auth 先定位到auth中间件  |
*  |  后面紧跟的 /login 将匹配调用 对应的函数                               |
*  ---------------------------------------------------------------------
*
* */
app.use('/auth', auth);


// 通过调用 express.Router方法创建一个路由中间件
const user = express.Router();

// 可以再路由中间件上再次注册 一个路径 叫做 /login
user.get('/info', function (req, res) {
    // 向浏览器 响应一个 json 数据
    res.send({
        msg: '信息'
    })
});

/*
*  通过app 的 use 方法 使用 路由中间件,
*  第一个参数为中间件匹配执行条件, 表示当浏览器 访问 /user 的时候才匹配
*  最终结果
*  ----------------------------------------------------------------------
*  |  当用户访问的路径是 /user/info 的时候, 开头的 /user 先定位到 user 中间件  |
*  |  后面紧跟的 /info 将匹配调用 对应的函数                                 |
*  ----------------------------------------------------------------------
*
* */
app.use('/user', user);

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
