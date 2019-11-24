/*
*
* node counter_word.js 原文件 目标文件
*
* 统计原文件的单词出现频率, 将结果写入目标文件
*
* */

const fs = require('fs');
const path = require('path');

console.log(process.argv);

const source = path.resolve(process.argv[2]);
const target = path.resolve(process.argv[3]);

fs.readFile(source, 'utf-8', function (err, text) {

    // 以非单词字符 进行分割
    const words = text.split(/\W/);

    const map = new Map();
    for (word of words) {
        if (!word) {
            continue;
        }
        if (!map.has(word)) {
            map.set(word, 0)
        }
        let count = map.get(word);
        map.set(word, count + 1);
    }
    let results = [];
    for (let entry of map.entries()) {
        results.push(entry);
    }

    results = results.sort(function (a, b) {
        return b[1] - a[1];
    });

    results = results.map(function (item) {
        return item[1] + '\t\t' + item[0];
    });

    fs.writeFile(target, '频率\t\t单词\n--------------\n' + results.join('\n'), function (err, ok) {
        console.log('write finish')
    })

});
