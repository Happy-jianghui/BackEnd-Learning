const fs = require('fs')

// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
/* fs.readFile('./files/1.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('文件读取成功！' + data)
}) */

// 如果要解决问题，可以直接提供一个完整的文件存放路径就行
// 但会存在移植性非常差、不利于维护
/* fs.readFile('/Users/jianghuihappy88/Desktop/Node.js/1.node.js/1.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('文件读取成功！' + data)
})  */

// __dirname 表示当前文件所处的目录
// console.log(__dirname)
fs.readFile(__dirname + '/1.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('文件读取成功！' + data)
}) 