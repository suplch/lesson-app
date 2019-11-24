/*
*
* node copy.js 原文件地址 目标文件
*
* */
const fs = require('fs');
const path = require('path');

console.log(process.argv);

const source = path.resolve(process.argv[2]);
const target = path.resolve(process.argv[3]);

const sourceStream = fs.createReadStream(source);
const targetStream = fs.createWriteStream(target);

sourceStream.pipe(targetStream);


