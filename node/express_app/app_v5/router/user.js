// 导入 express 框架,
const express = require('express');

// 通过调用 express.Router方法创建一个路由中间件
const user = express.Router();

// 可以再路由中间件上再次注册 一个路径 叫做 /login
user.get('/info', function (req, res) {
    // 向浏览器 响应一个 json 数据
    res.send({
        msg: '信息'
    })
});

module.exports = user;
