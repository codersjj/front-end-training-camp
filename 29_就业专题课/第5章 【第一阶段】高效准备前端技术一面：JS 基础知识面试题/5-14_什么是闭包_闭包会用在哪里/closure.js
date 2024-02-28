/*
  闭包
    作用域应用的特殊情况，有两种表现：
      1. 函数作为参数被传递
      2. 函数作为返回值被返回
*/

// 函数作为参数
function foo(fn) {
  const a = 200
  fn()
}
const a = 100
function fn() {
  console.log(a)
}
foo(fn) // 100

// 函数作为返回值
function bar() {
  const b = 100
  return function() {
    console.log(b)
  }
}
const func = bar()
const b = 200
func() // 100

/*
  所有自由变量的查找，都是在函数声明的地方，向上层作用域查找
  而不是在函数调用的地方
*/