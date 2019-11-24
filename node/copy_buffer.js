/*
*
* node copy.js 原文件地址 目标文件
*
* */
const fs = require('fs');
const path = require('path');

console.log(process.argv);

// 源文件绝对路径
const source = path.resolve(process.argv[2]);
// 目标位置路径
const target = path.resolve(process.argv[3]);

// 创建一个文件读取流
const sourceStream = fs.createReadStream(source);
// 创建一个文件写入流
const targetStream = fs.createWriteStream(target);

// 当从流中读取数据的时候 触发 data 事件, 我们可以从回调函数 的参数获取到读取的数据块 (chunk)
sourceStream.on('data', function (chunk) {
    // 将读取到的源文件的数据块 写入 目标流中
    targetStream.write(chunk);
});

// 当读取流没有数据的时候, 触发 end 事件
sourceStream.on('end', function () {
    // 当没有数据可读的时候, 关闭目标流, 文件copy 结束
    targetStream.close()
});


