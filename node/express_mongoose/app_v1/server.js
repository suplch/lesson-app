// 导入 mongoose 模块
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// 连接 mongodb 数据库
mongoose.connect('mongodb://localhost/store',  { useUnifiedTopology: true, useNewUrlParser: true });

// 定义 产品的数据模式结构
const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    pic: String,
    type_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductType'
    }
});
// 定义 产品类型 数据模式结构
const ProductTypeSchema = mongoose.Schema({
    name: String
});

// 产品模型
const Product = mongoose.model('Product', ProductSchema);
// 产品类型模型
const ProductType = mongoose.model('ProductType', ProductTypeSchema);

const path = require('path');

// 返回 express 模块
const express = require('express');
// 导入 json body 解析器, 用来 处理前端 数据提交
const bodyParser = require('body-parser');

// 执行 express 函数 创建 一个App实例对象
const app = express();



// 创建处理静态网页的中间件
const publicMiddleware = express.static(path.join(__dirname, 'public'));

app.use(publicMiddleware);
// 启用 json 解析中间件
app.use(bodyParser.json());

// 产品模块路由
const product = express.Router();

// 当匹配 product 中间件时再访问 /list 执行当前注册的回调函数
product.get('/list', function (req, res) {
    // 查找所有的 产品信息
    Product.find().exec().then(function (products) {
        // 将返回 的产品数据 发给前端浏览器
        res.send({
            code: 0,
            products: products
        })
    }).catch(function (err) {
        res.send({
            code: 222,
            msg: err.message
        })
    });
});

product.get('/delete', async function (req, res) {
    console.log('正在删除...');

    // req.query 表示 前端传递过来的查询字符串对象
    console.log(req.query);

    const product_id = req.query.product_id;
    // 删除 product_id 所指向 的产品数据
    const result = await Product.deleteOne({_id: ObjectId(product_id)}).exec();
    // 打印一些 返回的 结果信息
    console.log(result);

    res.send({   //  当 deleteCount 等于 1 表示 删除成功
        code: result.deletedCount === 1 ? 0 : 333,
        msg: 'ok'
    })
});

product.post('/add', async function (req, res) {
    const {name, price, pic} = req.body;
    const ret = await Product.create({name, price, pic});
    res.send(ret);
});

// 当用户访问路径为 /product 打头 首先匹配 product 中间件
app.use('/product', product);

const port = 5000;
// 监听 5000 端口号
app.listen(port, function (err) {
    // 判断 是否有错误
    if (err) {
        // 打印错误消息
        console.error(error);
        return;
    }
    // 如果没有错误 打印提示消息
    console.log(`请访问 http://localhost:${port}`);
});
