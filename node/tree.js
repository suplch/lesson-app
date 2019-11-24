/*
*   遍历文件系统, 以树状结构的方式显示文件系统
* */

const fs = require('fs');
const path = require('path');
const dir = path.resolve(process.argv[2] || '.');
function visit(dir, deep) {
    try {
        console.log(' '.repeat(deep * 4) + path.basename(dir));
        const stat = fs.statSync(dir);
        if (stat.isDirectory()) { // 如果是文件夹 就返回文件列表
            const fileList = fs.readdirSync(dir, 'utf-8');
            for (let i = 0;i < fileList.length; i++) {  // 循环 递归访问
                let file = fileList[i];
                visit(path.join(dir, file), deep + 1);
            }
        }
    } catch (e) {
        //console.error(e); 处理可能的错误
    }
}
// 递归调用 访问所有文件
visit(dir, 0);
