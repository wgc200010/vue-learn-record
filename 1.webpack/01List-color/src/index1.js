// es6导入jqurey
import $ from 'jquery'

import './css/index.css'
import './css/index.less'

//jquery入口函数
$(function() {
    $('li:odd').css('background-color', 'pink')
    $('li:even').css('background-color', 'blue')
})

// 装饰器函数
function info(target) {
    target.info = 'Person info.'
}

@info
class Person {}
console.log(Person.info)