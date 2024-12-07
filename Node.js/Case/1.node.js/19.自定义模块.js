// 在一个自定义模块中，默认情况下， module.exports = {}

const age = 20

// 向 moudle.exports 对象上挂载 username 属性
module.exports.username = 'saber'

// 向 moudle.exports 对象上挂载 sayhello 属性
module.exports.sayhello = function() {
    console.log('Hello!')
    
}

 module.exports.age = age

//  让 module.exports 指向一个全新的对象 
module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('Hi!')        
    }
}