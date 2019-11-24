// 导入 express 框架,
const express = require('express');

// 通过调用 express.Router方法创建一个路由中间件
const auth = express.Router();

// 可以再路由中间件上再次注册 一个路径 叫做 /login
auth.get('/login', function (req, res) {
    res.send({
        msg: '登录成功'
    })
});

module.exports = auth;

